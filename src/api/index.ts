import { Router } from 'express'

import { charliesRouter } from './charlies/charlies.router'

//======================================================================================================================

const apiRouter = Router()

apiRouter.use('/charlies', charliesRouter)

export {
	apiRouter,
}
