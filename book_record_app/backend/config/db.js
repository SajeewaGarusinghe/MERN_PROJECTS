const mongoose = require('mongoose');

const MONGO_URI="mongodb+srv://sajeewa:sajeewa1234@sajeewacluster.aabhgdf.mongodb.net/mernbookapp?retryWrites=true&w=majority"

 

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan);
  } catch (err) {
    console.log('hi'+err);
    process.exit(1);
  }
};

module.exports = connectDB