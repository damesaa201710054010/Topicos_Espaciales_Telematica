const mongoose = require('mongoose');
const { Schema } = mongoose;


const devicesSchema = new Schema({
    user: {type: String, required: true},
    temperature: {type: String, required: true},
    humidity: {type: String, required: true},
    latitude: {type: Number, required: true},
    longitude: {type: Number, required: true},
    hora: {type: String, required: true},
    fecha: {type: String, required: true}
});

module.exports = mongoose.model('device', devicesSchema);

