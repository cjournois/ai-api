import { Router } from 'express'

import { waldosRouter } from './waldos/waldos.router'

//======================================================================================================================

// @ts-ignore
const apiRouter: Router = new Router()

apiRouter.use('/waldos', waldosRouter)

export {
	apiRouter
}
