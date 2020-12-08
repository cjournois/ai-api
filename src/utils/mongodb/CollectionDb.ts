import Client from '../../utils/mongodb/Client'

class CollectionDb {
	private collectionName: string

	constructor(collectionName: string) {
		this.collectionName = collectionName


	}

	async create(object: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Client.getInstance().getCollection(this.collectionName).createIndex(object).toArray((err: any, doc: any) => {
				if (err) {
					reject(err)
				}
				resolve(doc)
			})
		})
	}

	async find(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Client.getInstance().getCollection(this.collectionName).find(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

	async findOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Client.getInstance().getCollection(this.collectionName).findOne(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

	async updateOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Client.getInstance().getCollection(this.collectionName).deleteOne(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

	async deleteOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			Client.getInstance().getCollection(this.collectionName).deleteOne(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

}

export default CollectionDb
