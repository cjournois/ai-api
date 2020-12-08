import {MongoClient, Db} from 'mongodb'
import IAnnouncement from '../../models/IAnnouncement'

class Client {
	private static instance: Client

	private db: Db | undefined

	private constructor() {}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client()
		}
		return Client.instance
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

export default Client
