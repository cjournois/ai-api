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
		const filers: any = {}
		if (sort) {
			const [field, orderBy] = (<string> sort).split('|')
			filers.$sort = { [field]: orderBy === 'asc' ? 1 : -1 }
		}
		return super.find(filers)
	}

	public async create({ body }: Request): Promise<any> {
		return super.create(body as ICharlie)
	}

	public async findOne({ params: { id } }: Request): Promise<any> {
		return super.findOne({ _id: new ObjectId(id) })
	}

	public async updateOne({ params: { id }, body }: Request): Promise<void> {
		return super.updateOne({ _id: new ObjectId(id) }, body)
	}

	public async deleteOne({ params: { id } }: Request): Promise<void> {
		return super.deleteOne({ _id: new ObjectId(id) })
	}
}

export default new CharliesDb()
