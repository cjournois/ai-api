import { ObjectId } from 'mongodb'
import { Request } from 'express'

import CollectionDb from '../../utils/mongodb/CollectionDb'
import { CollectionName } from '../../utils/enums'
import { ICharlie } from '../../models'

class CharliesDb extends CollectionDb {
	constructor() {
		super(CollectionName.Charlies)
	}

	public async search({ query: { sort } }: Request) {
		console.log('search')
		const filers: any = {}
		if (sort) {
			const [field, orderBy] = (<string> sort).split('|')
			filers[field] = orderBy === 'asc' ? 1 : -1
		}
		return super.find(filers)
	}

	public async create({ body }: Request): Promise<any> {
		console.log('create:', body)
		return super.create(<ICharlie>body)
	}

	public async findOne({ params: { id } }: Request): Promise<any> {
		console.log('findOne:', id)
		return super.findOne({ _id: new ObjectId(id) })
	}

	public async updateOne({ params: { id }, body }: Request): Promise<void> {
		console.log('updateOne:', id, body)
		return super.updateOne({ _id: new ObjectId(id) }, body)
	}

	public async deleteOne({ params: { id } }: Request): Promise<void> {
		console.log('deleteOne')
		return super.deleteOne({ _id: new ObjectId(id) })
	}
}

export default new CharliesDb()
