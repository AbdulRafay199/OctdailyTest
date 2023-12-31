const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    rollno:{
        type: String,
        required: true
    }
})

const usermodel = mongoose.model('user',userschema);

module.exports = usermodel;