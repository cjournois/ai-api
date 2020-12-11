import { ObjectId } from 'mongodb'

declare interface IPrediction {
	_id?: ObjectId,
	animalId: ObjectId,
	executedAt: Date,
	score: number,
	time: number,
	result: string,
}

export default IPrediction
