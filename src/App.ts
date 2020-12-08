import express, {Express} from 'express'

import config from './config'

class App {
	private app: Express | undefined;

	public start() {
		this.app = express()
		console.log(config)
	}

	private connect() {

	}

	private middleware() {

	}
}

export default App
