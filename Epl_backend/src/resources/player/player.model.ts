import mongoose from 'mongoose'

export interface IPlayerInterface {
  name: string
  firstName: string
  lastName: string
  birth: Date
  nationality: string
  opId: string
}

export const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  birth: {
    type: Date
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  nationality: {
    type: String
  },
  opId: {
    type: String,
    required: true
  }
})

export const Player = mongoose.model<IPlayerInterface>('Player', PlayerSchema)
