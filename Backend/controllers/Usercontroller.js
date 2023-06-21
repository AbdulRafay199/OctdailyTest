const user = require("../models/User");

const adduser = async (req, res)=>{
    var success = false
    try {
        const userdata = await user.create(req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
};

const fetchuser = async (req, res)=>{
    try {
        const userdata = await user.find();
        res.json(userdata)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal error occurred")
    }
};

const updateuser = async (req, res)=>{
    var success = false
    try {
        const userdata = await user.findByIdAndUpdate({_id: req.params.id},req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
};

const dltuser = async (req, res)=>{
    var success = false
    try {
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