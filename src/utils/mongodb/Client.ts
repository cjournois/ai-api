import {MongoClient, Db} from 'mongodb'

class Client {
	private static instance: Client

	private constructor() {}

	public static getInstance(): Client {
		if (!Client.instance) {
			Client.instance = new Client()
		}
		return Client.instance
	}

	public client: MongoClient | undefined

	public connect(url: string, option: any): Promise<void> {
		return new Promise((resolve, reject) => {
			MongoClient.connect(url, option, (err, client) => {
				if (err) {
					reject(err)
				}
				this.client = client
				resolve()
			})
		})
	}

	public getDb(collection: string): Db | undefined {
		if (this.client) {
			return this.client.db(collection)
		}
		return undefined
	}
}

export default Client
