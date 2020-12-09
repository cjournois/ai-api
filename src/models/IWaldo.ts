import { ObjectId } from 'mongodb'

import IVector from './IVector'
import IWaldoLocation from './IWaldoLocation'

declare interface IWaldo {
	_id: ObjectId,
	name: string,
	imagePath: string,
	imageSize: IVector,
	waldoLocation: Array<IWaldoLocation>,
}

export default IWaldo
