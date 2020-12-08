import {Request} from 'express'

import Client from '../../utils/mongodb/Client'
import {IAnnouncement} from '../../models'

class AnnouncementsDb {
	private db: any

	constructor() {
		this.db = Client.getInstance().getDb('Annonces')
	}

	public async search(req: Request) {
		console.log('search')

	}

	public async create(req: Request) {
		console.log('create')

	}

	public async findOne(req: Request) {
		console.log('findOne')

	}

	public async updateOne(req: Request) {
		console.log('updateOne')

	}

	public async deleteOne(req: Request) {
		console.log('deleteOne')

	}
}

export default new AnnouncementsDb()
