import { NextFunction, Request, Response } from 'express'

import CharliesDb from './charlies.db'
import { predictImage, readImageFromPath } from '../../utils/ai'

//==================================================================================================

export async function search(req: Request, res: Response, next: NextFunction) {
	try {
		const results = await CharliesDb.search(req)

		res.json(results)
	} catch (err) {
		next(err)
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const { _id } = await CharliesDb.create(req)

		res.json(_id)
	} catch (err) {
		next(err)
	}
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
	try {
		const result = await CharliesDb.findOne(req)

		res.json(result)
	} catch (err) {
		next(err)
	}
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
	try {
		await CharliesDb.updateOne(req)

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
	try {
		await CharliesDb.deleteOne(req)

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

//==================================================================================================

export async function predict(req: Request, res: Response, next: NextFunction) {
	try {
		const { imagePath } = await CharliesDb.findOne(req)
		const image = readImageFromPath(`${__dirname}/../../files/${imagePath}`)
		const prediction = await predictImage(image)

		res.json(prediction)
	} catch (err) {
		next(err)
	}
}
