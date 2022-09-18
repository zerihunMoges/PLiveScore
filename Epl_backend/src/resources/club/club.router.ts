import { Router } from 'express'
import { addClub, bulkAddClub, getClubs, updateClub } from './club.controller'
const clubRouter = Router()

clubRouter.get('', getClubs)
clubRouter.post('', addClub)
clubRouter.put('', bulkAddClub)
clubRouter.put('/:id', updateClub)

export default clubRouter
