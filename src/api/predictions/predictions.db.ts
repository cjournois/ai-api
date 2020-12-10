import { ObjectId } from 'mongodb'
import { Request } from 'express'

import CollectionDb from '../../utils/mongodb/CollectionDb'
import { CollectionName } from '../../utils/enums'
import { IPrediction } from '../../models'

class AnimalsDb extends CollectionDb {
	constructor() {
		super(CollectionName.Predictions)
	}

	public async findAll() {
		return super.find({})
	}

	public async create(prediction: IPrediction): Promise<any> {
		return super.create(prediction)
	}

	public async deleteOne(id: ObjectId): Promise<void> {
		return super.deleteOne({ _id: id })
	}
}

export default new AnimalsDb()
