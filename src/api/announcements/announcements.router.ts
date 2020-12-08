import {Router} from 'express'

import {create, deleteOne, findOne, search, updateOne} from './announcements.controller'

//======================================================================================================================

// @ts-ignore
const announcementsRouter: Router = new Router()

announcementsRouter.get('/', search)
announcementsRouter.post('/', create)
announcementsRouter.get('/:id', findOne)
announcementsRouter.put('/:id', updateOne)
announcementsRouter.delete('/:id', deleteOne)

export {
	announcementsRouter
}
