import { Db, MongoClient } from 'mongodb'
import IAnnouncement from '../../models/IAnnouncement'

class ClientDb {
	private static instance: ClientDb

	private db: Db | undefined

	private constructor() {
	}

	public static getInstance(): ClientDb {
		if (!ClientDb.instance) {
			ClientDb.instance = new ClientDb()
		}
		return ClientDb.instance
	}

	public connect(url: string, option: any): Promise<void> {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, option, (err, client) => {
				if (err) {
					reject(err)
				}
				this.db = client.db('Ai-database')
				resolve()
			})
		})
	}

	public getCollection(collectionName: string): any {
		// @ts-ignore
		return this.db.collection<IAnnouncement>(collectionName)
	}
}

export default ClientDb
