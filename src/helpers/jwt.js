const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { jwtToken, saltRounds } = require('../../config/keys');


const extractToken = authToken => {
	if (authToken) {
		const split = authToken.split(' ');
		if (split.length > 1) {
			return split[1];
		}
		else {
			return authToken;
		}
	}
	else {
		return authToken;
	}
};

exports.verifyToken = (token, userId=null) => {
	try {
		token = extractToken(token);

		const user = jwt.verify(token, jwtToken);

		if (userId) {
			if (user.userId !== userId) {
				throw new Error('Unauthorized');
			}
		}

		return user;
	}
	catch(err) {
		throw err;
	}
};

exports.refreshToken = payload => {
	return jwt.sign(payload, jwtToken);
};

exports.generateHash = async text => {
	const hash = await bcrypt.hash(text, saltRounds);
	return hash;
};
