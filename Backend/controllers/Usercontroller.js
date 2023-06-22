const user = require("../models/User");


//controller for adding new user
const adduser = async (req, res)=>{
    var success = false
    try {
        //creates new data in the database
        const userdata = await user.create(req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
};

//controller for fetching all user
const fetchuser = async (req, res)=>{
    try {
        //user.find finds all the data user db and store it to userdata variable as array
        const userdata = await user.find();
        res.json(userdata)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal error occurred")
    }
};

//controller for updating specific user
const updateuser = async (req, res)=>{
    var success = false
    try {
        // user.findByIdAndUpdate updates the user data by taking user id in first param and new data in 2nd param
        const userdata = await user.findByIdAndUpdate({_id: req.params.id},req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
};

//controller for deleting specific user
const dltuser = async (req, res)=>{
    var success = false
    try {
        // user.findByIdAndDelete deletes that user whose id is given in the argument of func.
        const userdata = await user.findByIdAndDelete(req.params.id);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
};

module.exports = {
    adduser,fetchuser,updateuser,dltuser
}