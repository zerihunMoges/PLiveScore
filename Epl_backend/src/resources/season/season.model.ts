import mongoose from 'mongoose'

export interface ISeasonInterface {
  year: string
  opId: string
}

export const SeasonSchema = new mongoose.Schema({
  year: {
    type: String
  },
  opId: {
    type: String
  }
})

export const Season = mongoose.model<ISeasonInterface>('Season', SeasonSchema)
