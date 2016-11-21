var Task = require('../models/task.model');

exports.getAll = function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            throw err;
        }

        res.status(200).json(tasks);
    })
};