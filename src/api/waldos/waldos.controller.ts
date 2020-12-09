import { NextFunction, Request, Response } from 'express'

import WaldosDb from './waldos.db'

export async function search(req: Request, res: Response, next: NextFunction) {
	try {
		const results = await WaldosDb.search(req)

		res.json(results)
	} catch (err) {
		next(err)
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const { _id } = await WaldosDb.create(req)

		res.json(_id)
	} catch (err) {
		next(err)
	}
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
	try {
		const result = await WaldosDb.findOne(req)

		res.json(result)
	} catch (err) {
		next(err)
	}
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
	try {
		await WaldosDb.updateOne(req)

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
	try {
		await WaldosDb.deleteOne(req)

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}
