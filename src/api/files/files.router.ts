import { Router } from 'express'

import { fileParser } from '../../middlewares'
import * as files from './files.controller'

//==================================================================================================

const filesRouter = Router()

filesRouter.get('/:type/:file', files.get)
filesRouter.post('/predict', [fileParser], files.predict)

export default filesRouter
