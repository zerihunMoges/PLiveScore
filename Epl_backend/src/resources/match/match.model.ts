import mongoose from 'mongoose'
import { Club } from '../club/club.model'
import { Coach } from '../coach/coach.model'

interface periods {
  first: number | undefined
  second: number | undefined
}
interface status {
  long: string | undefined
  short: string | undefined
  elapsed: number | undefined
}
interface goals {
  home: number | undefined
  away: number | undefined
}
interface score {
  halftime: goals
  fulltime: goals
  extratime: goals
  penalty: goals
}
interface player {
  id: string | undefined
  name: string | undefined
}
interface time {
  elapsed: number | undefined
  extra: number | undefined
}

interface event {
  time: time
  team: mongoose.Types.ObjectId
  player: player
  assist: player
  type: string
  detail: string
  comment: string
}

interface squad {
  id: string
  name: string
  number: number
  pos: string
  grid: string
}
interface coach {
  id: string
  name: string
  photo: string
}

interface lineup {
  startXI: [squad]
  formation: string
  substitutes: [squad]
  coach: mongoose.Types.ObjectId
}

interface lineups {
  home: lineup
  away: lineup
}
interface stat {
  type: string
  value: number
}

const LineupSchema = new mongoose.Schema({
  team: {
    type: mongoose.Types.ObjectId,
    ref: Club
  },
  startXI: {
    type: []
  },
  formation: {
    type: String
  },
  substitutes: {
    type: []
  },
  coach: {
    type: mongoose.Types.ObjectId,
    ref: Coach
  }
})

const LineupsSchema = new mongoose.Schema({
  home: {
    type: LineupSchema
  },
  away: {
    type: LineupSchema
  }
})

export interface IMatchInterface {
  opId: string
  timezone: string
  referee: string | undefined
  date: Date
  league: mongoose.Types.ObjectId
  season: mongoose.Types.ObjectId
  status: status
  homeTeam: mongoose.Types.ObjectId
  awayTeam: mongoose.Types.ObjectId
  venue: mongoose.Types.ObjectId
  periods: periods
  score: score
  goals: goals
  round: string
  events: [event]
  lineups: lineups
  statistics: [stat]
}

const MatchSchema = new mongoose.Schema({
  opId: {
    type: String,
    required: true,
    unique: true
  },
  referee: {
    type: String
  },
  season: {
    type: mongoose.Types.ObjectId,
    ref: 'Season',
    required: true
  },
  date: {
    type: Date
  },
  status: {
    type: Object
  },
  league: {
    type: mongoose.Types.ObjectId,
    ref: 'League',
    required: true
  },
  homeTeam: {
    type: mongoose.Types.ObjectId,
    ref: 'Club',
    required: true
  },
  awayTeam: {
    type: mongoose.Types.ObjectId,
    ref: 'Club',
    required: true
  },
  score: {
    type: Object
  },
  goals: {
    type: Object
  },
  round: {
    type: String
  },
  events: {
    type: [Object]
  },
  lineups: {
    type: LineupsSchema
  },
  statistics: {
    type: [Object]
  },
  venue: {
    type: mongoose.Types.ObjectId,
    ref: 'Venue',
    required: true
  }
})

export const Match = mongoose.model<IMatchInterface>('Match', MatchSchema)
