import { Db, MongoClient } from 'mongodb'
import ICharlie from '../../models/ICharlie'

class ClientDb {
	private static instance: ClientDb

	private db: Db | undefined

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
		return this.db?.collection<ICharlie>(collectionName)
	}
}

export default ClientDb
