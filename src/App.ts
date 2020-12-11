import http, { Server } from 'http'
import express, { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

import config from './config'
import ClientDb from './utils/mongodb/ClientDb'
import apiRouter from './api'

class App {
	private app: Express | undefined

	private server: Server | undefined

	//==================================================================================================================

	private startServerAsync(port: number, hostname: string): Promise<void> {
		return new Promise((resolve) => {
			if (this.server) {
				this.server.listen(port, hostname, () => resolve())
			}
		})
	}

	private stopServerAsync(): Promise<void> {
		return new Promise((resolve) => {
			if (this.server) {
				this.server.close(() => resolve())
			}
		})
	}

	//==================================================================================================================

	private middlewares() {
		// WARN: Cors privacy
		const corsOptions = {
			origin(origin: any, callback: any) {
				const isWhitelisted = config.cors.whitelist.includes(origin)
				callback(null, isWhitelisted)
			},
			credentials: true,
		}

		if (this.app) {
			this.app.use(cors(corsOptions))
			this.app.use(bodyParser.json())
		}
	}

	public async start() {
		try {
			this.app = express()
			this.middlewares()

			this.server = http.createServer(this.app)
			await this.startServerAsync(config.server.port, config.server.hostname)
			console.log('server connected')

			await ClientDb.getInstance().connect(config.mongodb.url, {
				useUnifiedTopology: true,
			})
			console.log('mongodb connected')

			// Use main router
			this.app.use('/api', apiRouter)
		} catch (err) {
			console.error('error', err)
		}
	}
}

export default App
