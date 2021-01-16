const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./Routes/bootcamp');
//const logger = require('./middlewear/logger');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env' });
const app = express();

//app.use(logger);


if (process.env.NODE_ENV === 'development') {
     app.use(morgan('dev'));
}
app.use('/api/v1/bootcamps', bootcamps);
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on ${PORT},it has environmnet ${process.env.NODE_ENV}`));
