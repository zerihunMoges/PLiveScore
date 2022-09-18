import mongoose from 'mongoose'

export interface ICoachDetailInterface {
  coach: mongoose.Types.ObjectId
  height: string
  weight: string
  club: mongoose.Types.ObjectId
}

export const CoachDetailSchema = new mongoose.Schema({
  coach: {
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
  height: {
    type: String
  },
  weight: {
    type: String
  }
})

export const CoachDetail = mongoose.model<ICoachDetailInterface>(
  'CoachDetail',
  CoachDetailSchema
)
