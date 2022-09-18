import { Router } from 'express'
import { addEvent, addMatch, getMatches } from './match.controller'

const matchRouter = Router()

matchRouter.get('', getMatches)
matchRouter.put('/bulk', addMatch)
matchRouter.put('event/:match', addEvent)

export default matchRouter
