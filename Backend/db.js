const mongoose = require('mongoose');
const url = `mongodb+srv://abdulrafay199:4walgGWjOiSvokAI@cluster0.mixlipk.mongodb.net/`;

const mongodbconnection = async () => {
    mongoose.connect(url,
       await console.log("Connection to Mongodb for Octdaily Test Backend is Successfully made!")
    )
}
module.exports = mongodbconnection;
