const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

//connection string
const url = `mongodb+srv://abdulrafay199:${process.env.PASSWORD}@cluster0.mixlipk.mongodb.net/`;

const mongodbconnection = () => {
    mongoose.connect(url, console.log("Connection to Mongodb for Octdaily Test Backend is Successfully made!"))
}
module.exports = mongodbconnection;
