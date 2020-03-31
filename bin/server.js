import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import cors from 'cors';
import path from 'path';
import DB from '../src/helpers/db';
import Routes from '../src/routes';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../config/swagger.json';


class Server {
	app;
	db;
	routes;

	async initServer() {
		try {
			this.app = await express();
			this.app.use(bodyParser.json());
			this.app.use(bodyParser.urlencoded({ extended: false }));
			this.app.use(cookieParser());
			this.app.use(cors());
			this.app.use(helmet());

			this.app.use('/api-docs', swaggerUi.serve);
			this.app.get('/api-docs', swaggerUi.setup(swaggerDocument));
			await this.configureRoutes();
			return this.app;
		}
		catch (err) {
			throw err;
		}
	}

	async healthCheckRoute() {
		try {
			this.app.get('/health', (req, res, next) => {
				res.json({
					status: 'HEALTHY',
					msg: 'This works perfectly fine'
				});
			});
		}
		catch (err) {
			throw err;
		}
	}

	async healthyDB() {
		try {
			if (await this.db.checkConnection()) {
				this.app.get('/db', (req, res, next) => {
					res.json({
						msg: 'DB Connection Successfull'
					});
				});
				return;
			}

			throw new Error('Error connecting to DB');
		}
		catch(err) {
			throw err;
		}
	}

	async configureRoutes() {
		const db="";
		const router = express.Router();
		this.routes = new Routes(router,db);
		await this.routes.init();
		await this.routes.getRoutes();
		//mount routes
		this.app.use(router);
		
	}

}

export default Server;
