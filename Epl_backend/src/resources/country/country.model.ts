import mongoose from 'mongoose'

export interface ICountryInterface {
  name: string
  code: string
  flag: string
}

const CountrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  code: {
    type: String
  },
  flag: {
    type: String
  }
})

export const Country = mongoose.model<ICountryInterface>(
  'Country',
  CountrySchema
)
