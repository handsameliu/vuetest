'use strict';

exports.signIn = (req,res,next)=>{
	res.render('index',{title: '登陆'});
};
exports.signUp = (req,res,next)=>{
	res.render('signUp',{title: '注册'});
};
exports.index = (req,res,next)=>{
	res.render('index',{title: '首页'});
};