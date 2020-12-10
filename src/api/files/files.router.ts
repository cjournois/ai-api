import { Router } from 'express'

import * as files from './files.controller'

//==================================================================================================

const filesRouter = Router()

filesRouter.get('/:type/:file', files.get)

export default filesRouter
