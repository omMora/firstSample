var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    isDone: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);