import fs from 'fs'
import path from 'path'
import json5 from 'json5'

if (!process.env.NODE_CONFIG_PATH) {
	throw new Error('Missing NODE_CONFIG_PATH environment variable')
}

// read, parse and validate config file
// @ts-ignore
let config = json5.parse(fs.readFileSync(path.resolve(process.env.NODE_CONFIG_PATH)))

export default config
