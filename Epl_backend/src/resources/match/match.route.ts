import { Router } from 'express'
import { getMatch, getMatches, updateMatch } from './match.controller'

const matchRouter = Router()

matchRouter.get('', getMatches)
matchRouter.get('/:id', getMatch)
matchRouter.put('', updateMatch)
matchRouter.put('/:match', updateMatch)

export default matchRouter
