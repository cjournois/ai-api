import express, {Express} from 'express'
import config from 'config/index.ts'

class App {
	private app: Express | undefined;

	public start() {

		console.log(process.env)

		this.app = express()
		console.log(config)
	}
}

export default App
