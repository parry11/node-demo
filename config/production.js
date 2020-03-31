import db from './db';

module.exports = {
	port: 4000,
	db: db.production,
	logger: {
		maxSize: 5120000,
		maxFiles: 200
	},
	secretKey: '@ppB4!ld3r',
	saltKey: 'T@j!nd3R)%!@',
	apiKey: ')%!@T@j!nd3R',
	saltRounds: 2,
};
