import { time } from 'console'
import mongoose from 'mongoose'
import { Coach } from '../coach/coach.model'
import { Country } from '../country/country.model'
import { League } from '../league/league.model'
import { Match } from '../match/match.model'
import { PlayerDetail } from '../player.detail/playerDetail.model'
import { Player } from '../player/player.model'
import { Season } from '../season/season.model'
import { Club } from './club.model'

const fetch = require('node-fetch')

export async function populate() {
  await fetch(
    `https://api-football-beta.p.rapidapi.com/fixtures?league=39&season=2022`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '611c8372d4mshde05757227cb5b5p1643f2jsnd22c7dd860c2',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    }
  )
    .then((res) => res.json())
    .then(async (data: any) => {
      await new Promise((r) => setTimeout(r, 6000)).then()
      console.log(data)
      const { paging, response } = data
      response.forEach(async (match) => {
        const { fixture, league, teams, goals, score } = match
        const {
          id,
          referee,
          timezone,
          date,
          timestamp,
          periods,
          venue,
          status
        } = fixture
        const { home, away } = teams
        const homeTeam = await Club.findOne({ opId: home.id })
        const awayTeam = await Club.findOne({ opId: away.id })
        const leagueInfo = await League.findOne({ opId: league.id })
        const season = await Season.findOne({ opId: league.season })
        let events

        if (date < Date.now()) {
          console.log(Date.now())
          await fetch(
            `https://api-football-beta.p.rapidapi.com/fixtures/events?fixture=${fixture.id}`,
            {
              method: 'GET',
              headers: {
                'X-RapidAPI-Key':
                  '611c8372d4mshde05757227cb5b5p1643f2jsnd22c7dd860c2',
                'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
              }
            }
          )
            .then((res) => res.json())
            .then(async (data: any) => {
              console.log(data)
              const { response } = data
              for (var i = 0; i < response.length; i++) {
                const club = await Club.findOne({ opId: response[i].team.id })
                if (response[i].team.id != null && club)
                  response[i].team = club._id
              }

              events = response
            })
        }

        const matchInfo = await Match.create({
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
          event: events
        })
      })
      const { current, total } = paging

      // if (current < total) {
      //   await new Promise((r) => setTimeout(r, 6000)).then(() =>
      //     populate(current + 1)
      //   )
      // }
    })
    .catch((err) => {
      console.log(err)
    })
}

// clubs.forEach(async (club) => {
//   const { team, venue } = club
//   const { address, city, capacity, surface, image } = venue
//   const stadium = await Venue.create({
//     opId: venue.id,
//     name: venue.name,
//     address,
//     city,
//     capacity,
//     surface,
//     image
//   })
//   const { code, country, founded, national, logo } = team
//   const coun = await Country.findOne({ name: country })
//   const clubInfo = await Club.create({
//     opId: team.id,
//     name: team.name,
//     shortName: code,
//     country: coun._id,
//     founded,
//     logo
//   })
//   const clubDetail = await ClubDetail.create({
//     club: clubInfo._id,
//     season: new mongoose.Types.ObjectId('63243bca0a5a4fa3650ce6c9'),
//     league: new mongoose.Types.ObjectId('6323db9fba55f6eff38890a8')
//   })
// })

// const { paging, response } = data
// console.log(data)
// response.forEach(async (res: { player: any; statistics: any }) => {
//   const { player, statistics } = res
//   console.log(player)
//   const {
//     id,
//     name,
//     age,
//     firstname,
//     lastname,
//     birth,
//     nationality,
//     height,
//     weight,
//     photo
//   } = player

//   const {
//     team,
//     league,
//     games,
//     cards,
//     dribbles,
//     substitutes,
//     duels,
//     tackels,
//     goals,
//     shots,
//     fouls,
//     penalty
//   } = statistics[0]

//   const club = await Club.findOne({ opId: team.id })
//   const comp = await League.findOne({ opId: league.id })

//   const playerInfo = await Player.create({
//     opId: id,
//     name,
//     firstName: firstname,
//     lastName: lastname,
//     nationality: nationality,
//     birth: new Date(birth.date)
//   })

//   const playerDetail = await PlayerDetail.create({
//     player: playerInfo._id,
//     age,
//     season: new mongoose.Types.ObjectId('63243bca0a5a4fa3650ce6c9'),
//     games,
//     height,
//     weight,
//     club: club._id,
//     league: comp._id,
//     cards,
//     dribbles,
//     substitutes,
//     duels,
//     tackels,
//     goals,
//     shots,
//     fouls,
//     penalty,
//     image: photo
//   })
// })
