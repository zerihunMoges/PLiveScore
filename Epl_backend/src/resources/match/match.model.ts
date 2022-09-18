import mongoose from 'mongoose'

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
  event: [event]
  startXI: [squad]
  formation: string
  substitutes: [squad]
  coach: mongoose.Types.ObjectId
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
  event: {
    type: [Object]
  },
  startXI: {
    type: [Object]
  },
  formation: {
    type: String
  },
  substitutes: {
    type: [Object]
  },
  venue: {
    type: mongoose.Types.ObjectId,
    ref: 'Venue',
    required: true
  },
  coach: {
    type: mongoose.Types.ObjectId,
    ref: 'Coach'
  }
})

export const Match = mongoose.model<IMatchInterface>('Match', MatchSchema)
