import { ObjectId } from 'mongodb'
import {Request, RequestParamHandler} from 'express'

import CollectionDb from '../../utils/mongodb/CollectionDb'
import {IAnnouncement} from '../../models'

class AnnouncementsDb extends CollectionDb {
	private announcementsDb: any

	constructor() {
		super('Annonces')
	}

	public async search(req: Request) {
		console.log('search')


		const result = await super.find({ _id: new ObjectId('5fcf9889eac7454cc49b4d87') })


		console.log(result)


	}

	public async create(req: Request) {
		console.log('create')

	}

	public async findOne({ params: { id } }: Request) {
		console.log('findOne:', id)
		return super.findOne({ _id: new ObjectId(id) })
	}

	public async updateOne({ body }: Request) {
		console.log('updateOne')
	}

	public async deleteOne(req: Request) {
		console.log('deleteOne')

	}
}

export default new AnnouncementsDb()
