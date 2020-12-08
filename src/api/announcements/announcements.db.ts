import MongoDb from '../../utils/MongoDb'

import {IAnnouncement} from '../../models'
import {NextFunction, Request, Response} from 'express'

class AnnouncementsDb extends MongoDb {
	constructor() {
		super('Annonces');
	}

	public async search(req: Request, res: Response, next: NextFunction): Promise<Array<IAnnouncement>> {
		return await super.findAll()
	}
}

export default new AnnouncementsDb()
