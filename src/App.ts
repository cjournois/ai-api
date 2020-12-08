import express, {Express} from 'express'

import config from './config'
import ClientDb from './utils/ClientDb'
import MongoDb from './utils/MongoDb'

class App {
	private app: Express | undefined;

	public start() {
		this.app = express()

		this.connect()
			.then(() => {
				const announcements = new MongoDb('Annonces')
			})

	}

	private middleware() {

	}

	private async connect() {
		const clientDb = ClientDb.getInstance()
		await clientDb.connect(config.mongodb.url, {
			useUnifiedTopology: true
		})
	}
}

export default App
