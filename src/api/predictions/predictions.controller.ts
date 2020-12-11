import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'

import PredictionsDb from './predictions.db'
import AnimalsDb from '../animals/animals.db'
import { IPrediction, IAnimal } from '../../models'

//==================================================================================================

export async function findAll(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('predictions, findAll')

		const predictions = await PredictionsDb.findAll()

		const animalsIds = predictions.map(({ animalId }: IPrediction) => animalId)
		const animals = await AnimalsDb.find({ _id: { $in: animalsIds } })
		const mapAnimals = animals.reduce((mapper: any = {}, animal: IAnimal) => ({
			[String(animal._id)]: animal,
			...mapper,
		}), {})

		res.json(predictions.map(({ _id, animalId, ...prediction }: IPrediction) => ({
			_id,
			animal: mapAnimals[String(animalId)],
			...prediction,
		})))
	} catch (err) {
		next(err)
	}
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('predictions, deleteOne:', req.params.id)

		await PredictionsDb.deleteOne(new ObjectId(req.params.id))

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}
