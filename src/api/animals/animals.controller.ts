import { NextFunction, Request, Response } from 'express'
import { ObjectId } from 'mongodb'

import AnimalsDb from './animals.db'
import PredictionsDb from '../predictions/predictions.db'

import { predictImage, readImageFromPath } from '../../utils/ai'
import { shuffle } from '../../utils/helpers'
import { Animal, AnimalTypeToFr } from '../../utils/enums'
import { IAnimal } from '../../models'

//==================================================================================================

export async function findAll(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, findAll')

		const results = await AnimalsDb.findAll()

		res.json(results)
	} catch (err) {
		next(err)
	}
}

export async function create(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, create:', req.body)

		const { _id } = await AnimalsDb.create(req.body as IAnimal)

		res.json(_id)
	} catch (err) {
		next(err)
	}
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
	if (req.params.id === 'random') {
		return await random(req, res, next)
	}

	try {
		console.log('animals, findOne:', req.params.id)
		const result = await AnimalsDb.findOne(new ObjectId(req.params.id))

		res.json(result)
	} catch (err) {
		next(err)
	}
}

export async function updateOne(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, updateOne:', req.params.id, req.body)

		await AnimalsDb.updateOne(new ObjectId(req.params.id), req.body as IAnimal)

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

export async function deleteOne(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, deleteOne:', req.params.id)

		await AnimalsDb.deleteOne(new ObjectId(req.params.id))

		res.status(204).send()
	} catch (err) {
		next(err)
	}
}

//==================================================================================================

export async function random(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, random')

		const [randomAnimal] = await AnimalsDb.aggregate([{ $sample: { size: 1 } }])
		randomAnimal.choices = shuffle([
			randomAnimal.type,
			...shuffle(Object.values(Animal)
				.filter((type) => type !== randomAnimal.type))
				.slice(0, 3),
		]).map((type) => ({
			name: AnimalTypeToFr[type],
			type
		}))

		res.json(randomAnimal)
	} catch (err) {
		next(err)
	}
}

export async function predict(req: Request, res: Response, next: NextFunction) {
	try {
		console.log('animals, search')

		const { _id, imagePath, ...animal } = await AnimalsDb.findOne(new ObjectId(req.params.id))
		const image = readImageFromPath(`${__dirname}/../../files/${imagePath}`)

		const timer = new Date()
		const [tempPrediction] = await predictImage(image)

		// Insert prediction with animalId
		const { _id: predictionId, animalId, ...prediction } = await PredictionsDb.create({
			animalId: new ObjectId(_id),
			executedAt: timer,
			score: Math.round(tempPrediction.score * 10000) / 100,
			time: new Date().getTime() - timer.getTime(),
			result: tempPrediction.class === 'person' ? Animal.Touchard : tempPrediction.class,
		})

		res.json({
			_id: predictionId,
			animal,
			prediction,
		})
	} catch (err) {
		next(err)
	}
}
