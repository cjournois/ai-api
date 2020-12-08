import {MongoClient} from 'mongodb'

class ClientDb {
	private static instance: ClientDb

	private constructor() {}

	public static getInstance(): ClientDb {
		if (!ClientDb.instance) {
			ClientDb.instance = new ClientDb()
		}
		return ClientDb.instance
	}

	public client: MongoClient | undefined

	public connect(url: string, option: any) {
		MongoClient.connect(url, option, (err, client) => {
			this.client = client
		})
	}

	public db(collection: string) {
		// @ts-ignore
		return this.client.db(collection)
	}
}

export default ClientDb
