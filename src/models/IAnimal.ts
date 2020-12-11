import { ObjectId } from 'mongodb'

declare interface IAnimal {
	_id?: ObjectId,
	name: string,
	type: string,
	imagePath: string,
}

export default IAnimal
