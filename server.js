const express = require('express');
const dotenv = require('dotenv');
const bootcamps = require('./Routes/bootcamp');
const errorHandler = require('./middlewear/error')
//const logger = require('./middlewear/logger');
const connectDB = require('./config/db');
const morgan = require('morgan');
dotenv.config({ path: './config/config.env' });
const app = express();
app.use(express.json());
//app.use(logger);
//connectDB();

if (process.env.NODE_ENV === 'development') {
     app.use(morgan('dev'));
}
app.use('/api/v1/bootcamps', bootcamps);
//app.use(errorHandler)
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is listening on ${PORT},it has environmnet ${process.env.NODE_ENV}`));
