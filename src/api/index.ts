import { Router } from 'express'

import filesRouter from './files/files.router'
import charliesRouter from './charlies/charlies.router'

//==================================================================================================

const apiRouter = Router()

apiRouter.use('/charlies', charliesRouter)
apiRouter.use('/files', filesRouter)

export default apiRouter
