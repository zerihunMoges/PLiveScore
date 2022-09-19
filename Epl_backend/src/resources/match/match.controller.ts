import { Club } from '../club/club.model'
import { League } from '../league/league.model'
import { Season } from '../season/season.model'
import { Match } from './match.model'
import { Venue } from '../venue/venue.model'

export async function addMatch(req, res, next) {
  try {
    const { matches } = req.body
    matches.forEach(async (match) => {
      const { fixture, league, teams, goals, score } = match
      const { id, referee, timezone, date, timestamp, periods, venue, status } =
        fixture

      let curMatch = await Match.findOneAndUpdate(
        { opId: id },
        {
          referee,

          goals,
          score,
          timezone,

          date,
          timestamp,
          periods,

          status
        }
      )

      if (!curMatch) {
        const { home, away } = teams
        const homeTeam = await Club.findOne({ opId: home.id })
        const awayTeam = await Club.findOne({ opId: away.id })
        const leagueInfo = await League.findOne({ opId: league.id })
        const season = await Season.findOne({ opId: league.season })

        curMatch = await Match.create({
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
          status
        })
      }

      if (curMatch) {
        res.status(201).json(curMatch)
      } else {
        res.status(400).json({ message: 'cannot save match' })
      }
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export async function addEvent(req, res, next) {
  try {
    const { id } = req.params
    const { events, line } = req.body

    const match = await Match.findOne({ opId: id })
    if (!match) {
      res.status(400).json({ message: 'invalid match id' })
      return
    }
    match.event = events
    await match.save()
    res.status(200).json(match)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}
export async function getMatches(req, res, next) {
  const matches = await Match.find({}).populate([
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

export async function getMatch(req, res, next) {
  try {
    const { id } = req.params
    const match = await Match.findOne({ opId: id })
    if (match) {
      res.status(200).json(match)
      return
    } else {
      return res.status(404)
    }
  } catch (err) {
    res.status(500).json({ messsage: err.messsage })
  }
}
