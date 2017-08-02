'use strict';

const express = require('express');
const router = express.Router();

const contro = require("../../controller");
const user = contro.user;

router.post('/user/signIn',user.signIn);									/*登陆*/
router.post('/user/signUp',user.signUp);									/*注册*/
router.post('/user/signOut',user.signOut);                                  /*退出*/

module.exports = router;