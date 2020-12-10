import { load } from '@tensorflow-models/coco-ssd'

import readImage from './readImage'

async function findCharlie(path: string) {
	const image = readImage(path)
	console.log(image)

	const model = await load()
	return model.detect(image)
}

export default findCharlie
