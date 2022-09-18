import mongoose from 'mongoose'

export interface Game {
  appearences: number | undefined
  lineups: number | undefined
  minutes: number | undefined
  number: number | undefined
  position: string | undefined
  rating: number | undefined
  captain: boolean
}

export interface substitutes {
  in: number
  out: number
  bench: number
}

export interface shots {
  total: number | undefined
  on: number | undefined
}
export interface goals {
  total: number | undefined
  conceded: number | undefined
  assits: number | undefined
  saves: number | undefined
}

export interface passes {
  total: number | undefined
  key: number | undefined
  accuracy: number | undefined
}
export interface tackels {
  total: number | undefined
  blocks: number | undefined
  interceptions: number | undefined
}
export interface cards {
  yellow: number | undefined
  yellowred: number | undefined
  red: number | undefined
}
export interface duels {
  total: number | undefined
  won: number | undefined
}
export interface dribbles {
  attempts: number | undefined
  success: number | undefined
  past: number | undefined
}
export interface fouls {
  drawn: number | undefined
  committed: number | undefined
}

export interface Penalty {
  won: number | undefined
  commited: number | undefined
  scored: number | undefined
  saved: number | undefined
  missed: number | undefined
}

export interface IPlayerDetailInterface {
  player: mongoose.Types.ObjectId
  season: mongoose.Types.ObjectId
  age: number | undefined
  image: string
  height: string
  weight: string
  club: mongoose.Types.ObjectId
  league: mongoose.Types.ObjectId
  games: Game
  cards: cards
  dribbles: dribbles
  substitutes: substitutes
  duels: duels
  tackels: tackels | undefined
  goals: goals | undefined
  shots: shots | undefined
  fouls: fouls | undefined
  penalty: Penalty
}

export const PlayerDetailSchema = new mongoose.Schema({
  player: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  season: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  league: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  club: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  age: {
    type: Number
  },
  games: {
    type: Object
  },
  cards: {
    type: Object
  },
  dribbles: {
    type: Object
  },
  substitutes: {
    type: Object
  },
  duels: {
    type: Object
  },
  tackels: {
    type: Object
  },
  goals: {
    type: Object
  },
  shots: {
    type: Object
  },
  fouls: {
    type: Object
  },
  penalty: {
    type: Object
  },
  image: {
    type: String
  },
  height: {
    type: String
  },
  weight: {
    type: String
  }
})

export const PlayerDetail = mongoose.model<IPlayerDetailInterface>(
  'PlayerDetail',
  PlayerDetailSchema
)
