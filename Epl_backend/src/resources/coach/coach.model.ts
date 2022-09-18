import mongoose from 'mongoose'

export interface ICoachInterface {
  name: string
  firstName: string
  lastName: string
  birth: Date
  image: string
  nationality: string
  opId: string
  club: mongoose.Types.ObjectId
  age: number
}

export const CoachSchema = new mongoose.Schema({
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
  image: {
    type: String
  },
  age: {
    type: Number
  },
  nationality: {
    type: String
  },
  opId: {
    type: String,
    required: true
  },
  club: {
    type: mongoose.Types.ObjectId,
    required: true
  }
})

export const Coach = mongoose.model<ICoachInterface>('Coach', CoachSchema)
