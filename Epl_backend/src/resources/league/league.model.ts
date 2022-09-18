import mongoose, { mongo } from 'mongoose'

export interface ILeagueInterface {
  opId: string
  name: string
  logo: string
}

export const LeagueSchema = new mongoose.Schema({
  opId: {
    type: String
  },
  name: {
    type: String
  },
  logo: {
    type: String
  }
})

export const League = mongoose.model<ILeagueInterface>('League', LeagueSchema)
