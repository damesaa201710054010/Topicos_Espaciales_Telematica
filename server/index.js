const express = require('express');
const app = express();
const morgan = require('morgan');
const { mongoose } = require('./database');

//setting, tome el puerto que le de el so o el 3000 en caso de no existir la primera opcion
app.set('port', process.env.PORT || 3000);

//middlewear
app.use(morgan('dev'));
//con este modulo ya no necesito bodyparser
app.use(express.json());

//Router
//app.use('/api/devices/' , require('./routes/device.routes'));
app.use('/api/devices/', require('./routes/device.routes'));

//statcis


//the app start
app.listen(app.get('port'), () => {
    console.log('Server on port ' + app.get('port'));  
});