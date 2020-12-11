import * as fs from 'fs'
import { NextFunction, Request, Response } from 'express'

import { predictImage, readImageFromFile } from '../../utils/ai'

//==================================================================================================

export async function get({ params: { type, file: fileName } }: Request, res: Response, next: NextFunction) {
	try {
		console.log('files, get:', type, fileName)

		const file = fs.readFileSync(`${__dirname}/../../files/${type}/${fileName}`)

		res.send(file)
	} catch (err) {
		next(err)
	}
}

export async function predict({ file }: Request, res: Response, next: NextFunction) {
	try {
		console.log('files, predict')

		const image = readImageFromFile(file)
		const prediction = await predictImage(image)

		res.json(prediction)
	} catch (err) {
		next(err)
	}
}
