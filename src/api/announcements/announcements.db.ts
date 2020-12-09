import { ObjectId } from 'mongodb'
import { Request } from 'express'

import CollectionDb from '../../utils/mongodb/CollectionDb'
import { CollectionName } from '../../utils/enums'

class AnnouncementsDb extends CollectionDb {
	constructor() {
		super(CollectionName.Announcements)
	}

	public async search({ query: { page, sort, between } }: Request) {
		console.log('search:', page, sort, between)
		// @ts-ignore
		const [start, end] = typeof between === 'string'
			? between.split('|')
			// @ts-ignore
			: [null, '9999-01-1']

		const { metadata, data } = (await super.aggregate([{
			$sort: {
				host_since: sort === 'asc' ? 1 : -1
			}
		}, {
			$match: {
				'host_since': {
					$gte: new Date(start),
					$lte: new Date(end)
				}
			}
		}, {
			$facet: {
				metadata: [ { $count: "total" } ],
				data: [{
					$skip: (Number(page) - 1 || 0)  * 10
				}, {
					$limit: 10
				}]
			}
		}]))[0]

		return {
			metadata: {
				count: metadata[0].total,
				pages: Math.round((metadata[0].total / 10) + 0.5),
				page
			},
			data
		}
	}

	public async create({ body }: Request): Promise<any> {
		console.log('create:', body)
		return super.create(body)
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

export default new AnnouncementsDb()
