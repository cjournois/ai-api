import { Router } from 'express'

import { announcementsRouter } from './announcements/announcements.router'

//======================================================================================================================

// @ts-ignore
const apiRouter: Router = new Router()

apiRouter.use('/announcements', announcementsRouter)

export {
	apiRouter
}
