import { Router } from 'express'
import { getStandings, updateStanding } from './standing.controller'

const standingRouter = Router()
standingRouter.get('', getStandings)
standingRouter.put('', updateStanding)

export default standingRouter
