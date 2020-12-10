import { Router } from 'express'

import * as charlies from './charlies.controller'

//==================================================================================================

const charliesRouter = Router()

charliesRouter.get('/', charlies.search)
charliesRouter.post('/', charlies.create)
charliesRouter.get('/:id', charlies.findOne)
charliesRouter.put('/:id', charlies.updateOne)
charliesRouter.delete('/:id', charlies.deleteOne)
charliesRouter.get('/:id/predict', charlies.predict)

export default charliesRouter
