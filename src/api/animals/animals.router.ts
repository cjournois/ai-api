import { Router } from 'express'

import * as animals from './animals.controller'

//==================================================================================================

const animalsRouter = Router()

animalsRouter.get('/', animals.findAll)
animalsRouter.post('/', animals.create)
animalsRouter.get('/:id', animals.findOne)
animalsRouter.put('/:id', animals.updateOne)
animalsRouter.delete('/:id', animals.deleteOne)

animalsRouter.get('/:id/predict', animals.predict)

export default animalsRouter
