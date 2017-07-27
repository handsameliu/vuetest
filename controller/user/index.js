'use strict';

let service = require('../../service');
let user = service.user;

exports.signIn = (req,res)=>{
	user.signIn(req,res);

	/**
	 * co(user.signIn({req.body.username,req.body.password})).then((data) => {
        res.json(message(null, {result: data}))
		}).catch((error) => {
			res.json(message(error.message));
		});
	 */
};
exports.signUp = (req,res)=>{
	user.signUp(req,res);
};
exports.signOut = (req,res)=>{
	user.signOut(req,res);
};