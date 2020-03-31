import config from 'config';
import Sequelize from 'sequelize';

export default class DB {
	seqClient;
	dbConfig = config.db;
	mysqlConfigClient = this.dbConfig.mysql.client;
	db = {};

	async connectMySQLClient() {
		try {
			this.seqClient= new Sequelize(
				this.mysqlConfigClient.database,
				this.mysqlConfigClient.username,
				this.mysqlConfigClient.password, {
					host: this.mysqlConfigClient.host,
					port: this.mysqlConfigClient.port,
					dialect: this.mysqlConfigClient.dialect,
					operatorsAliases: false,
					pool: {
						min: this.mysqlConfigClient.pool.min,
						max: this.mysqlConfigClient.pool.max,
						idle: this.mysqlConfigClient.pool.idle
					}
				});

			this.seqClient
				.authenticate()
				.then(() => {
					console.log('Connection to Client DB has been established successfully.');
				})
				.catch(err => {
					console.error('Unable to connect to the Client database:', err);
				});
		}
		catch(err) {
			throw err;
		}
	}

	async init() {
		await this.connectMySQLClient();
		await this.setupModels();
	}

	async checkConnection() {
		try {
			return true;
		}
		catch(error) {
			console.log('DB Connection error: ', error);
		}
	}

	async setupModels() {
		this.db.sqlClient = this.seqClient;
		this.db.models = {
			client: {},
		};
		// here we connect the DB tables
		this.db.models.client.Users = this.seqClient.import('../../models/mysql/users.js');
	}

	async getDB() {
		return this.db;
	}

}
