import express, {Express} from 'express';

class App {
	private app: Express;

	public start() {
		this.app = express()
	}
}

export default App
