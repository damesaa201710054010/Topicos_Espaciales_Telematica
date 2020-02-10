const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { mongoose } = require('./database');

//setting, get the so port or local port like final option
app.set('port', process.env.PORT || 3000);
app.use(cors());
//middlewear
app.use(morgan('dev'));
//con este modulo ya no necesito bodyparser
app.use(express.json());
//console.log("hi");  
//Router
app.use('/api/data', require('./routes/data.route'));
app.use('/user', require('./routes/user.route'));

//the app start
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));  
});