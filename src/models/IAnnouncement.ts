import { ObjectId } from 'mongodb'

declare interface IAnnouncement {
	_id: ObjectId,
	id: string,
	name: string,
	picture_url: string,
	price: string
}

export default IAnnouncement
