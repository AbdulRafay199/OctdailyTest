const express = require("express");
const user = require("../models/User");

const router = express.Router();

router.post('/adduser', async (req, res)=>{
    var success = false
    try {
        const userdata = await user.create(req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
})

router.get('/fetchuser', async (req, res)=>{
    try {
        const userdata = await user.find();
        res.json(userdata)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal error occurred")
    }
})

router.patch('/updateuser/:id', async (req, res)=>{
    var success = false
    try {
        const userdata = await user.findByIdAndUpdate({_id: req.params.id},req.body);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
})

router.delete('/deleteuser/:id', async (req, res)=>{
    var success = false
    try {
        const userdata = await user.findByIdAndDelete(req.params.id);
        success = true
        res.json({success:success,msg:userdata})
    } catch (error) {
        console.log(error);
        res.status(500).json({success:success,msg:"Internal error occurred"})
    }
})

module.exports = router;