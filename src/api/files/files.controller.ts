import * as fs from 'fs'
import { NextFunction, Request, Response } from 'express'

//==================================================================================================

export async function get({ params: { type, file: fileName } }: Request, res: Response, next: NextFunction) {
	try {
		console.log(`${__dirname}/../../files/${type}/${fileName}`)
		const file = fs.readFileSync(`${__dirname}/../../files/${type}/${fileName}`)

		res.send(file)
	} catch (err) {
		next(err)
	}
}
