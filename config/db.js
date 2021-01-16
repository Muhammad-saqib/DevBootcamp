const mangoose = require('mongoose');

const connectDB = async () => {
     const conn = await mangoose.connect(MONGO_URI, {
          useNewUrlParser: true,
          useCreateIndex: true,
          useFindAndModify: false,
          useUnifiedTopology: true
     });
     console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);

}