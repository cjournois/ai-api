import { ObjectId } from 'mongodb'
import ClientDb from './ClientDb'

class MongoDb {
	private collection: string
	db: any

	constructor(collection: string) {
		this.collection = collection
		this.db = ClientDb.getInstance().db(collection)
	}

	private findAll(query: object) {

	}

	private findOne(id: ObjectId) {

	}
}

export default MongoDb
