import { Router } from 'express'

import { create, deleteOne, findOne, search, updateOne } from './waldos.controller'

//======================================================================================================================

// @ts-ignore
const waldosRouter: Router = new Router()

waldosRouter.get('/', search)
waldosRouter.post('/', create)
waldosRouter.get('/:id', findOne)
waldosRouter.put('/:id', updateOne)
waldosRouter.delete('/:id', deleteOne)

export {
	waldosRouter
}
