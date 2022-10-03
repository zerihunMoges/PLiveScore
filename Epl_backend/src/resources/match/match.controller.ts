import { Club } from '../club/club.model'
import { League } from '../league/league.model'
import { Season } from '../season/season.model'
import { Match } from './match.model'
import { Venue } from '../venue/venue.model'
import { Coach } from '../coach/coach.model'

export async function updateMatch(req, res, next) {
  try {
    const { match } = req.body
    const { fixture, league, teams, goals, score, lineups, events } = match
    const { id, referee, timezone, date, timestamp, periods, venue, status } =
      fixture
    let homeTeam
    let awayTeam
    let home = {
      team: null,
      coach: null,
      startXI: null,
      substitutes: null,
      formation: null
    }
    let away = {
      team: null,
      coach: null,
      startXI: null,
      substitutes: null,
      formation: null
    }

    if (lineups) {
      for (const lineup of lineups) {
        const { team, coach, startXI, substitutes, formation } = lineup
        const manager = await Coach.findOne({ opId: coach.id })
        homeTeam = await Club.findOne({ opId: teams.home.id })
        awayTeam = await Club.findOne({ opId: teams.away.id })
        if (teams.home.id == team.id) {
          home = {
            team: homeTeam._id,
            coach: manager ? manager._id : null,
            startXI,
            substitutes,
            formation
          }
        } else {
          away = {
            team: awayTeam._id,
            coach: manager ? manager._id : null,
            startXI,
            substitutes,
            formation
          }
        }
      }
    }
    console.log('home away')
    console.log(away)
    let result = await Match.findOneAndUpdate(
      { opId: id },
      {
        referee,

        goals,
        score,
        timezone,

        date,
        timestamp,
        periods,
        round: league.round,
        status,
        lineups: {
          home,
          away
        },
        events
      }
    )
    if (!result) {
      homeTeam = homeTeam
        ? await Club.findOne({ opId: teams.home.id })
        : homeTeam
      awayTeam = awayTeam
        ? await Club.findOne({ opId: teams.away.id })
        : awayTeam
      const leagueInfo = await League.findOne({ opId: league.id })
      const season = await Season.findOne({
        opId: league.season,
        league: leagueInfo._id
      })
      result = await Match.create({
        opId: id,
        referee,
        league: leagueInfo._id,
        goals,
        score,
        timezone,
        homeTeam: homeTeam._id,
        awayTeam: awayTeam._id,
        season: season._id,
        date,
        timestamp,
        periods,
        venue: homeTeam.venue,
        status,
        round: league.round,
        lineups: {
          home,
          away
        },
        events
      })
    }

    res.status(200).json(result)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
export async function getMatches(req, res, next) {
  var { round, from, to, limit, page } = req.query
  limit = limit ? limit : 10
  page = page ? page : 1

  // const days = {'Monday':0, 'Tuseday':1, 'Wedensday':2, 'Thursday': 3, 'Friday': 4, 'Saturday': 5, 'Sunday': 6}
  const dateFinder = {
    $gt: from
      ? new Date(from).toJSON()
      : new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate()
        ).toJSON(),
    $lt: to
      ? new Date(to).toJSON()
      : new Date(
          new Date().getFullYear() + 1,
          new Date().getMonth(),
          new Date().getDate()
        ).toJSON()
  }

  const finder = {
    date: dateFinder,
    round: round || {
      $ne: 0
    }
  }
  const estimate = await Match.find(finder).count()
  const matches = await Match.find(finder)
    .sort({ date: 'asc' })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate([
      {
        path: 'season',
        model: Season,
        select: '-__v'
      },
      {
        path: 'homeTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'awayTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'league',
        model: League,
        select: '-__v'
      },
      {
        path: 'venue',
        model: Venue,
        select: '-__v'
      }
    ])
  res.status(200).json({
    hasNext: Math.ceil(estimate / limit) > page,
    data: matches
  })
}

export async function getMatch(req, res, next) {
  try {
    const { id } = req.params
    const match = await Match.findOne({ opId: id }).populate([
      {
        path: 'season',
        model: Season,
        select: '-__v'
      },
      {
        path: 'homeTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'awayTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'league',
        model: League,
        select: '-__v'
      },
      {
        path: 'venue',
        model: Venue,
        select: '-__v'
      },
      {
        path: 'lineups',
        populate: [
          {
            path: 'home',
            populate: [
              { path: 'team', model: Club, select: '-__v' },
              { path: 'coach', model: Club, select: '-__v' }
            ]
          },
          {
            path: 'away',
            populate: [
              { path: 'team', model: Club, select: '-__v' },
              { path: 'coach', model: Coach, select: '-__v' }
            ]
          }
        ]
      }
    ])

    if (match) {
      res.status(200).json(match)
      return
    } else {
      res.status(404)
      return
    }
  } catch (err) {
    res.status(500).json({ messsage: err.messsage })
    return
  }
}

export async function getResult(req, res, next) {
  var { round, from, to, limit, page } = req.query
  limit = limit ? limit : 10
  page = page ? page : 1

  const estimate = await Match.find({ 'status.short': 'FT' }).count()
  const matches = await Match.find({ 'status.short': 'FT' })
    .sort({ date: 'desc' })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate([
      {
        path: 'season',
        model: Season,
        select: '-__v'
      },
      {
        path: 'homeTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'awayTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'league',
        model: League,
        select: '-__v'
      },
      {
        path: 'venue',
        model: Venue,
        select: '-__v'
      }
    ])
  res.status(200).json({
    hasNext: Math.ceil(estimate / limit) > page,
    data: matches
  })
}

export async function getLiveMatches(req, res, next) {
  const matches = await Match.find({
    'status.short': { $in: ['1H', '2H', 'P', 'ET', 'BT', 'HT'] }
  })
    .sort({ date: 'desc' })
    .populate([
      {
        path: 'season',
        model: Season,
        select: '-__v'
      },
      {
        path: 'homeTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'awayTeam',
        model: Club,
        select: '-__v'
      },
      {
        path: 'league',
        model: League,
        select: '-__v'
      },
      {
        path: 'venue',
        model: Venue,
        select: '-__v'
      }
    ])

  res.status(200).json(matches)
}
