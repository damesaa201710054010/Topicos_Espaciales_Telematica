const mongoose = require('mongoose');
const {Schema} = mongoose;

const user = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    id: {type: Number, required: true},
    edad: {type: Number}
});

module.exports = mongoose.model('user', user);