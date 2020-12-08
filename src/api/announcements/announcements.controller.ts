import {NextFunction, Request, Response} from 'express'

import AnnouncementsDb from './announcements.db'

export async function search(req: Request, res: Response, next: NextFunction) {
	try {
		const results = await AnnouncementsDb.search(req)

		res.json(results)
	} catch (err) { next(err) }
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		const id = await AnnouncementsDb.create(req)

		res.json(id)
	} catch (err) { next(err) }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
	try {
		const result = await AnnouncementsDb.findOne(req)

		res.json(result)
	} catch (err) { next(err) }
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
	try {
		const results = await AnnouncementsDb.updateOne(req)

		res.status(204).send()
	} catch (err) { next(err) }
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
	try {
		const results = await AnnouncementsDb.deleteOne(req)

		res.status(204).send()
	} catch (err) { next(err) }
}
