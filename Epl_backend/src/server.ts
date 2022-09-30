import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import clubRouter from './resources/club/club.router'
import { connect } from './db/setup'
import { configs } from './config'
import morgan from 'morgan'
import matchRouter from './resources/match/match.route'

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use('/api/club', clubRouter)
app.use('/api/matches', matchRouter)

export const start = async () => {
  try {
    await connect()
    app.listen(configs.port, () => {
      console.log(`REST API on http://:${configs.port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}
