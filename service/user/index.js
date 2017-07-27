'use strict';

let {message} = require('../../helper');
const config = require('../../config');
const querystring = require('querystring');
const request = require('axios');  // 发送请求   https://github.com/axios
const moment = require('moment');  // 处理时间   http://momentjs.cn/

/**
 * 登陆
 */
exports.signIn = (req,res) => {
    let body = req.body;
    res.json(message(null,{error_code:0,message:'success',result:{username:'',_id:''}}));
};

/**
 * 注册
 */
exports.signUp = (req,res) => {
    let body = req.body;
    res.json(message(null,{error_code:0,message:'success'}));
};

/**
 * 退出
 */
exports.signOut = (req,res) => {
    req.session.user = null;  
    res.json(message(null,{message:'success'}));
};

/** 例：
 * const user = function * (params){
 * let result =  yield request.get(config.API+ '/api/user/'+params.username+'/'+params.password);
    result = result.data;
    if(result.error_code === -1){
        throw new Error(result.message); 
    }else{
        return result.result
    }
    }
 * 
 *  yield request.post(config.API + '/api/wechat', querystring.stringify({
        userId: orderMicroMedical.user.toString(),
        orderNo: orderMicroMedical.orderNo,
        serviceId: orderMicroMedical.serviceId,
        create_at: orderMicroMedical.create_at + '',
        update_at: orderMicroMedical.update_at + ''
    }))
 * 
 * 
 * 
 */