import mongoose from 'mongoose'

export interface ISeasonInterface {
  year: string
  opId: string
  league: mongoose.Types.ObjectId
  rounds: []
}

export const SeasonSchema = new mongoose.Schema({
  year: {
    type: String
  },
  opId: {
    type: String
  },
  league: {
    type: mongoose.Types.ObjectId
  },
  rounds: {
    type: []
  }
})

export const Season = mongoose.model<ISeasonInterface>('Season', SeasonSchema)
