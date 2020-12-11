import { Router } from 'express'

import animalsRouter from './animals/animals.router'
import charliesRouter from './charlies/charlies.router'
import predictionsRouter from './predictions/predictions.router'
import filesRouter from './files/files.router'

//==================================================================================================

const apiRouter = Router()

apiRouter.use('/animals', animalsRouter)
apiRouter.use('/charlies', charliesRouter)
apiRouter.use('/predictions', predictionsRouter)
apiRouter.use('/files', filesRouter)

export default apiRouter
