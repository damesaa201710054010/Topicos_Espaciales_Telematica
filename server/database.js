const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/telematicsApp')
        .then(db => console.log('Data base connected'))
        .catch(err => console.log(err));

module.exports = mongoose;



