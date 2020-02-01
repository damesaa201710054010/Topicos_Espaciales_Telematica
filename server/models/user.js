const mongoose = require('mongoose');
const Schema = mongoose;

const users = new Schema({
    user: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('user', users);
