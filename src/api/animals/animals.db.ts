import { ObjectId } from 'mongodb'
import { Request } from 'express'

import CollectionDb from '../../utils/mongodb/CollectionDb'
import { CollectionName } from '../../utils/enums'
import { IAnimal } from '../../models'

class AnimalsDb extends CollectionDb {
	constructor() {
		super(CollectionName.Animals)
	}

	public async findAll() {
		return super.find({})
	}

	public async create(animal: IAnimal): Promise<any> {
		return super.create(animal)
	}

	public async findOne(id: ObjectId): Promise<any> {
		return super.findOne({ _id: new ObjectId(id) })
	}

	public async updateOne(id: ObjectId, animal: IAnimal): Promise<void> {
		return super.updateOne({ _id: id }, animal)
	}

	public async deleteOne(id: ObjectId): Promise<void> {
		return super.deleteOne({ _id: id })
	}
}

export default new AnimalsDb()
