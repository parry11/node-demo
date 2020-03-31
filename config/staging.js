import db from './db';

module.exports = {
	port: 3030,
	db: db.staging,
	logger: {
		maxSize: 512000,
		maxFiles: 100
	},
	secretKey: '@ppB4!ld3r',
	saltKey: 'T@j!nd3R)%!@',
	apiKey: ')%!@T@j!nd3R',
	saltRounds: 2,
};
