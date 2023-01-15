const mongoose = require('mongoose');
const colour = require('colour');
require('dotenv').config();

const connString = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(connString, {
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('Database connection succeeded 💥'.underline.blue);
  } catch (error) {
    console.log('Database connection failed 💥'.underline.red);
    process.exit(1);
  }
};

module.exports = connectDB;
