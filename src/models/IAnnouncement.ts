import { ObjectId } from 'mongodb'

declare interface IAnnouncement {
	id: ObjectId,
	name: string,
	picture_url: string,
	price: string
}

export default IAnnouncement
