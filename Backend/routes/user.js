const express = require("express");
const user = require("../models/User");

const router = express.Router();

router.post('/adduser', async (req, res)=>{
    try {
        const userdata = await user.create(req.body);
        res.json(userdata)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal error occurred")
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

module.exports = router;