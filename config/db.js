const db = {
	development: {
		mysql: {
			client: {
				host: '127.0.0.1',
				username: 'root',
				password: '',
				port: 3306,
				database: 'node_sample',
				dialect: 'mysql',
				pool: {
					min: 2,
					max: 5,
					acquire: 30000,					
					idle: 10000
				}
			},
		}
	},
	staging: {
		mysql: {
			client: {
				host: 'localhost',
				username: 'root',
				password: 'root',
				port: 3306,
				database: 'database_name',
				dialect: 'mysql',
				pool: {
					min: 2,
					max: 5,
					idle: 10000
				}
			},
		}
	},
	production: {
		mysql: {
			client: {
				host: 'localhost',
				username: 'username',
				password: 'password',
				port: 3306,
				database: 'database_name',
				dialect: 'mysql',
				pool: {
					min: 2,
					max: 5,
					idle: 10000
				}
			},
		}
	},
};

export default db;
