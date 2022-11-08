const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const v2Schema = new Schema({
    year: {
        type: Number,
    },
    t: {
        type: Number,
    }

});

module.exports = mongoose.model('V2', v2Schema);