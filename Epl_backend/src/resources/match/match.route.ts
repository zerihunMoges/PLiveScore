import { Router } from 'express'
import {
  getLiveMatches,
  getMatch,
  getMatches,
  getResult,
  updateMatch
} from './match.controller'

const matchRouter = Router()
matchRouter.get('/results', getResult)
matchRouter.get('/live', getLiveMatches)
matchRouter.get('', getMatches)
matchRouter.get('/:id', getMatch)
matchRouter.put('', updateMatch)
// matchRouter.put('/:match', updateMatch)

export default matchRouter
