import express, {Express} from 'express'
import http from 'http'
import announcement from './routes/announcement'
import config from './config'

class App {
    private app: Express | undefined;
    private server: any;

    public start() {
        this.app = express()
        this.server = http.createServer(this.app).listen(3000)
        this.app.use('/api', announcement)
        console.log(config)
    }

    private connect() {

    }

    private middleware() {

    }

}

export default App
