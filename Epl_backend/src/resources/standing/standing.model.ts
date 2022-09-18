import mongoose from 'mongoose'

export interface IStandingInterface {
  league_id: string
  league_year: string
  league_name: string
  team_id: mongoose.Types.ObjectId
  overall_promotion: string
  overall_league_position: number
  overall_league_payed: number
  overall_league_W: number
  overall_league_D: number
  overall_league_L: number
  overall_league_GF: number
  overall_league_GA: number
  overall_league_PTS: number
  home_league_position: number
  home_promotion: string
  home_league_payed: number
  home_league_W: number
  home_league_D: number
  home_league_L: number
  home_league_GF: number
  home_league_GA: number
  home_league_PTS: number
  away_league_position: number
  away_promotion: string
  away_league_payed: number
  away_league_W: number
  away_league_D: number
  away_league_L: number
  away_league_GF: number
  away_league_GA: number
  away_league_PTS: number
  league_round: string
  fk_stage_key: number
  stage_name: string
}

export const StandingSchema = new mongoose.Schema({
  league_id: {
    type: String,
    required: true
  },
  league_year: {
    type: String,
    required: true
  },
  team_id: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  overall_promotion: {
    type: String,
    default: ''
  },
  overall_league_position: {
    type: Number,
    default: 0
  },
  overall_league_payed: {
    type: Number,
    default: 0
  },
  overall_league_W: {
    type: Number,
    default: 0
  },
  overall_league_D: {
    type: Number,
    default: 0
  },
  overall_league_L: {
    type: Number,
    default: 0
  },
  overall_league_GF: {
    type: Number,
    default: 0
  },
  overall_league_GA: {
    type: Number,
    default: 0
  },
  overall_league_PTS: {
    type: Number,
    default: 0
  },
  home_league_position: {
    type: Number,
    default: 0
  },
  home_promotion: {
    type: String,
    default: ''
  },
  home_league_payed: {
    type: Number,
    default: 0
  },
  home_league_W: {
    type: Number,
    default: 0
  },
  home_league_D: {
    type: Number,
    default: 0
  },
  home_league_L: {
    type: Number,
    default: 0
  },
  home_league_GF: {
    type: Number,
    default: 0
  },
  home_league_GA: {
    type: Number,
    default: 0
  },
  home_league_PTS: {
    type: Number,
    default: 0
  },
  away_league_position: {
    type: Number,
    default: 0
  },
  away_promotion: {
    type: String
  },
  away_league_payed: {
    type: Number,
    default: 0
  },
  away_league_W: {
    type: Number,
    default: 0
  },
  away_league_D: {
    type: Number,
    default: 0
  },
  away_league_L: {
    type: Number,
    default: 0
  },
  away_league_GF: {
    type: Number,
    default: 0
  },
  away_league_GA: {
    type: Number,
    default: 0
  },
  away_league_PTS: {
    type: Number,
    default: 0
  },
  league_round: {
    type: String,
    default: ''
  },
  fk_stage_key: {
    type: Number,
    default: 0
  },
  stage_name: {
    type: String,
    default: ''
  }
})
