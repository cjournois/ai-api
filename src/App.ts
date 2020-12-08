import express, {Express} from 'express'
import http from 'http'
import announcement from './routes/announcement'
import config from './config'
import ClientDb from './utils/ClientDb'
import MongoDb from './utils/MongoDb'

class App {
    private app: Express | undefined;
    private server: any;

    public start() {
        this.app = express()
        this.server = http.createServer(this.app).listen(3000)
        this.app.use('/api', announcement)
        console.log(config)
    }


    private middleware() {

    }

	}

	private async connect() {
		const clientDb = ClientDb.getInstance()
		await clientDb.connect(config.mongodb.url, {
			useUnifiedTopology: true
		})
	}
}

export default App
