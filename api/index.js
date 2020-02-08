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
app.use('/api/data/', require('./routes/data.route'));
//app.use('/api/user', require('./routes/user.route'));

//the app start
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));  
});