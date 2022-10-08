import express from 'express'
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import clubRouter from './resources/club/club.router'
import { connect } from './db/setup'
import { configs } from './config'
import morgan from 'morgan'
import matchRouter from './resources/match/match.route'
import standingRouter from './resources/standing/standing.route'

const app = express()

app.use(bodyParser.json())
app.use(cors())

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/api/club', clubRouter)
app.use('/api/matches', matchRouter)
app.use('/api/standings', standingRouter)
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
