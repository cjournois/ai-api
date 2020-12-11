import { ObjectId } from 'mongodb'

declare interface ICharlie {
	_id: ObjectId,
	name: string,
	imagePath: string,
}

export default ICharlie
