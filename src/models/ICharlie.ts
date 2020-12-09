import { ObjectId } from 'mongodb'

import IVector from './IVector'
import ILocation from './ILocation'

declare interface ICharlie {
	_id: ObjectId,
	name: string,
	imagePath: string,
	imageSize: IVector,
	locations: Array<ILocation>,
}

export default ICharlie
