const mongose = require('mongoose');

const Schema = mongose.Schema;

const eventSchema = new Schema({
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