import { Router } from 'express'

import * as predictions from './predictions.controller'

//==================================================================================================

const predictionsRouter = Router()

predictionsRouter.get('/', predictions.findAll)
predictionsRouter.delete('/:id', predictions.deleteOne)

export default predictionsRouter
