import { Router } from 'express'
import { addEvent, addMatch, getMatch, getMatches } from './match.controller'

const matchRouter = Router()

matchRouter.get('', getMatches)
matchRouter.get('/:id', getMatch)
matchRouter.put('/bulk', addMatch)
matchRouter.put('event/:match', addEvent)

export default matchRouter
