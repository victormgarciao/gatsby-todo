const mongose = require('mongoose');

const Schema = mongose.Schema;

const eventSchema = new Schema({
    todoId: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isChecked:{
        type: Boolean,
        required: true,
    },
});

module.exports = mongose.model('todos', eventSchema);