var express = require('express');
var taskCtrl = require('../controllers/task.controller');

module.exports = function(app){

    var router = express.Router();

    router.route('/tasks')
        .get(taskCtrl.getAll)
        //.post(taskCtrl.create);



    app.use('/api', router);
};