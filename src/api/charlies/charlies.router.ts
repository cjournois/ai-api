import { Router } from 'express'

import { create, deleteOne, findOne, search, updateOne } from './charlies.controller'

//======================================================================================================================

const charliesRouter = Router()

charliesRouter.get('/', search)
charliesRouter.post('/', create)
charliesRouter.get('/:id', findOne)
charliesRouter.put('/:id', updateOne)
charliesRouter.delete('/:id', deleteOne)

export {
	charliesRouter,
}
