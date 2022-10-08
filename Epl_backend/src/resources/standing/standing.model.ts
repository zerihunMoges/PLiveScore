import mongoose, { mongo } from 'mongoose'

interface stat {
  played: number
  win: number
  draw: number
  lose: number
  goals: {
    for: number
    against: number
  }
}
export interface IStandingInterface {
  league: mongoose.Types.ObjectId
  season: mongoose.Types.ObjectId
  team: mongoose.Types.ObjectId
  rank: number
  points: number
  goalsDiff: number
  status: string
  form: string
  description: string
  all: stat
  home: stat
  away: stat
}

export const StandingSchema = new mongoose.Schema({
  league: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  season: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  team: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  rank: {
    type: Number,
    required: true,
    unique: true
  },
  points: {
    type: Number,
    default: 0
  },
  goalsDiff: {
    type: Number,
    default: 0
  },
  status: {
    type: String
  },
  form: {
    type: String
  },
  all: {
    type: Object
  },
  home: {
    type: Object
  },
  away: {
    type: Object
  }
})

export const Standing = mongoose.model<IStandingInterface>(
  'Standing',
  StandingSchema
)
