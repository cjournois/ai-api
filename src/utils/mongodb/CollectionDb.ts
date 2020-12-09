import { ObjectId } from 'mongodb'

import ClientDb from './ClientDb'

class CollectionDb {
	private collectionName: string

	constructor(collectionName: string) {
		this.collectionName = collectionName
	}

	async create(data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			let document
			if (!data.id) {
				document = {
					id: new ObjectId(),
					...data,
				}
			} else {
				document = { ...data }
			}

			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.insertMany(
					[document], (err: any, res: any) => {
						if (err) {
							reject(err)
						}
						resolve(res.ops[0])
					},
				)
		})
	}

	async find(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.find(query)
				.toArray(
					(err: any, docs: any) => {
						if (err) {
							reject(err)
						}
						resolve(docs)
					},
				)
		})
	}

	async aggregate(aggregates: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.aggregate(aggregates)
				.toArray(
					(err: any, docs: any) => {
						if (err) {
							reject(err)
						}
						resolve(docs)
					},
				)
		})
	}

	async findOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.find(query)
				.toArray(
					(err: any, docs: any) => {
						if (err) {
							reject(err)
						}
						resolve(docs[0])
					},
				)
		})
	}

	async updateOne(query: any, data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.updateOne(query, { $set: data }, (err: any, res: any) => {
					if (err) {
						reject(err)
					}
					resolve(res)
				})
		})
	}

	async deleteOne(query: any): Promise<any> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.deleteOne(query, (err: any, res: any) => {
					if (err) {
						reject(err)
					}
					resolve(res)
				})
		})
	}

	async count(): Promise<number> {
		return new Promise((resolve, reject) => {
			ClientDb.getInstance()
				.getCollection(this.collectionName)
				.countDocuments((err: any, docs: any) => {
					if (err) {
						reject(err)
					}
					resolve(docs)
				})
		})
	}
}

export default CollectionDb
