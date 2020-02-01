const mongoose = require('mongoose');
const { Schema } = mongoose;


const devicesSchema = new Schema({
    user: {type: String, required: true},

});

module.exports = mongoose.model('device', devicesSchema);

