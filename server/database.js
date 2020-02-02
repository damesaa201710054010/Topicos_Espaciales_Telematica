const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/telematicsApp';

mongoose.connect(URI)
        .then(db => console.log('Data base connected'))
        .catch(err => console.log(err));