import mongoose from 'mongoose'

export interface IClubInterface {
  name: string
  opId: string
  shortName: string
  founded: number
  logo: string
  venue: mongoose.Types.ObjectId
  country: mongoose.Types.ObjectId
}

const ClubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  opId: {
    type: String,
    required: true,
    unique: true
  },
  shortName: {
    type: String
  },
  venue: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  founded: {
    type: Number
  },
  logo: {
    type: String
  },
  country: {
    type: mongoose.Types.ObjectId
  }
})

export const Club = mongoose.model<IClubInterface>('Club', ClubSchema)
