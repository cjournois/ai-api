import fs from 'fs'
import path from 'path'
import json5 from 'json5'

//======================================================================================================================

interface IConfigServer {
	hostname: string,
	port: number,
}

interface IConfigCors {
	whitelist: Array<string>,
}

interface IConfigMongoDb {
	database: string,
	url: string,
}

interface IConfig {
	server: IConfigServer,
	cors: IConfigCors,
	mongodb: IConfigMongoDb,
}

//======================================================================================================================

if (!process.env.NODE_CONFIG_PATH) {
	throw new Error('Missing NODE_CONFIG_PATH environment variable')
}

// read, parse and validate config file
const config: IConfig = <IConfig>json5.parse(String(fs.readFileSync(path.resolve(process.env.NODE_CONFIG_PATH))))

export default config
