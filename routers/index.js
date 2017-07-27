'use strict';

const page = require('./page_router');
const api = require('./api_router');

module.exports = function (app) {
    app.use('/', page);
    // app.all('/api', function (req, res, next) {
    //     res.header("Access-Control-Allow-Origin", "*");
    //     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //     res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    //     // res.header("X-Powered-By",' 3.2.1')  
    //     // res.header("Content-Type", "application/json;charset=utf-8");  
    //     next();
    // });
    app.use('/api', api);
}
