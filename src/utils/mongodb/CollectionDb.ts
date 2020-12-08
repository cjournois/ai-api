import ClientDb from './ClientDb'

class CollectionDb {
	private collectionName: string

	constructor(collectionName: string) {
		this.collectionName = collectionName


	}

	async create(data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance().getCollection(this.collectionName).createIndex(data).toArray((err: any, res: any) => {
				if (err) {
					reject(err)
				}
				resolve(res)
			})
		})
	}

	async find(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance().getCollection(this.collectionName).find(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

	async findOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance().getCollection(this.collectionName).find(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs[0])
			})
		})
	}

	async updateOne(query: any, data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance().getCollection(this.collectionName).deleteOne(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

	async deleteOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance().getCollection(this.collectionName).deleteOne(query).toArray((err: any, docs: any) => {
				if (err) {
					reject(err)
				}
				resolve(docs)
			})
		})
	}

}

export default CollectionDb
