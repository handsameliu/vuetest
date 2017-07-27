'use strict';

const express = require('express');
const router = express.Router();

const page = require("../../controller").page;

router.get('/',page.signIn); /*首页*/
router.get('/signIn',page.signIn); /*登陆*/
router.get('/index',page.index); /*首页*/

module.exports = router;