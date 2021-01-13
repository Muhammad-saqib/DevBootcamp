const express = require('express');
const dotenv = require("dotenv");
const bootcamps = require('./Routes/bootcamp');

dotenv.config({ path: './config/config.env' });


const app = express();

const logger = (req, res, next) => {

     console.log(`Middle wear call ${req.method} ${req.protocol}:${req.get('host')}:${req.orginalURL}`);
     next();
}
app.use(logger);

app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;


app.listen(PORT, console.log(`server is listening on ${PORT},it has environmnet ${process.env.NODE_ENV}`));


