import fs from 'fs'
import path from 'path'

console.log(process)

if (!process.env.NODE_CONFIG_PATH) {
	throw new Error('Missing NODE_CONFIG_PATH environment variable')
}

// read, parse and validate config file
const config = fs.readFileSync(path.resolve(process.env.NODE_CONFIG_PATH))

export default config
