import {ObjectId} from 'mongodb'
import {Request} from 'express'

import {IWaldo} from '../../models'
import CollectionDb from '../../utils/mongodb/CollectionDb'
import { CollectionName } from '../../utils/enums'

class AnnouncementsDb extends CollectionDb {
	constructor() {
		super(CollectionName.Waldos)
	}

	public async search(req: Request) {
		console.log('search')
		return super.find({})

	}

	public async create({ body }: Request): Promise<any> {
		console.log('create:', body)
		return super.create(body)
	}

	public async findOne({ params: { id } }: Request): Promise<any> {
		console.log('findOne:', id)
		return super.findOne({ _id: new ObjectId(id) })
	}

	public async updateOne({ params: { id }, body }: Request): Promise<void> {
		console.log('updateOne:', id, body)
		return super.updateOne({ _id: new ObjectId(id) }, body)
	}

	public async deleteOne({ params: { id } }: Request): Promise<void> {
		console.log('deleteOne')
		return super.deleteOne({ _id: new ObjectId(id) })
	}
}

export default new AnnouncementsDb()
