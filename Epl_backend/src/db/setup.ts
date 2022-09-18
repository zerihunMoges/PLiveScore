import mongoose from 'mongoose'
import { dbSetup } from '../config/dbsetup'

export const connect = (url = dbSetup.url) => {
  return mongoose.connect(url)
}
