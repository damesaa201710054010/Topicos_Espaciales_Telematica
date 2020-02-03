const mongoose = require('mongoose');//mongo


//get the system route or like final option the local route
const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost/telematicsApp';


//  connecting with data base
mongoose.connect(URI)
        .then(db => console.log('Data base connected'))
        .catch(err => console.log(err));