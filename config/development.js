import db from './db';

module.exports = {
	port: 3025,
	db: db.development,
	logger: {
		maxSize: 512000,
		maxFiles: 100
	},
	secretKey: '@ppB4!ld3r',
	saltKey: 'T@j!nd3R)%!@',
	apiKey: ')%!@T@j!nd3R',
	saltRounds: 2,
};
