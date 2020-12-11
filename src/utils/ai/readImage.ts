import * as fs from 'fs'
import { Tensor3D } from '@tensorflow/tfjs'
import { node } from '@tensorflow/tfjs-node'

export function readImageFromPath(path: string): Tensor3D {
	const imageBuffer = fs.readFileSync(path)
	return <Tensor3D>node.decodeImage(imageBuffer)
}

export function readImageFromFile(file: any): Tensor3D {
	return <Tensor3D>node.decodeImage(file.buffer)
}
