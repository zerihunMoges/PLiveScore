import { truncate } from 'fs'
import mongoose from 'mongoose'

export interface IVenueInterface {
  opId: string
  name: string
  address: string
  city: string
  capacity: Number
  image: string
}

export const VenueSchema = new mongoose.Schema({
  opId: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  capacity: {
    type: Number
  },
  image: {
    type: String
  }
})

export const Venue = mongoose.model<IVenueInterface>('Venue', VenueSchema)
