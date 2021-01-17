const mongoose = require('mongoose');
const { model } = require('../models/Bootcamp');

const connectDB = async () => {
     try {


          mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
          //  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
     } catch (err) {
          console.log(err)
     }


}
module.exports = connectDB;