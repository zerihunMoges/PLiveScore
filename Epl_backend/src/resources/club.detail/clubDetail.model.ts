import mongoose from 'mongoose'

export interface IClubDetailInterface {
  club: mongoose.Types.ObjectId
  season: mongoose.Types.ObjectId
  league: mongoose.Types.ObjectId
  players: [mongoose.Types.ObjectId]
  coaches: [mongoose.Types.ObjectId]
}

export const ClubDetailSchema = new mongoose.Schema({
  club: {
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
  players: {
    type: [mongoose.Types.ObjectId]
  },
  coaches: {
    type: [mongoose.Types.ObjectId]
  }
})

export const ClubDetail = mongoose.model<IClubDetailInterface>(
  'ClubDetail',
  ClubDetailSchema
)
