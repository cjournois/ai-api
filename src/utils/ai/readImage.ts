import * as fs from 'fs'
import { node } from '@tensorflow/tfjs-node'

function readImage(path: string): any {
	const imageBuffer = fs.readFileSync(path)
	return node.decodeImage(imageBuffer)
}

export default readImage
