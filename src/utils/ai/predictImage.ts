import { Tensor3D } from '@tensorflow/tfjs'
import { load } from '@tensorflow-models/coco-ssd'

async function predictImage(image: Tensor3D) {
	const model = await load()
	return model.detect(image)
}

export default predictImage
