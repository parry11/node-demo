import Joi from 'joi';


exports.loginSchema = {
	body: {
		username: Joi.string().min(5).max(20).trim().alphanum().lowercase().required().label('Username').error(new Error('Username is required')),
		password: Joi.string().trim().regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/).required().label('Password').error(new Error('Password is mandatory and must contain 1 capital, 1 small,  1 numeric and 1 special character')),
		device: Joi.object().keys({ os: Joi.string().trim().required(), deviceId: Joi.string().trim().required() }).optional().label('Device details'),
	}
};
