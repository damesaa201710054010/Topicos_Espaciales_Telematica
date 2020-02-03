const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

//setting, get the so port or local port like final option
app.set('port', process.env.PORT || 3000);

//middlewear
app.use(morgan('dev'));
//con este modulo ya no necesito bodyparser
app.use(express.json());

//Router
app.use('/api/devices/', require('./routes/device.routes'));
app.use('/api/user', require('./routes/front.routes'));

//the app start
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));  
});