const express = require("express");
const { adduser, fetchuser, updateuser, dltuser } = require("../controllers/Usercontroller");


const router = express.Router();

router.post('/adduser', adduser)

router.get('/fetchuser', fetchuser)

router.patch('/updateuser/:id', updateuser)

router.delete('/deleteuser/:id', dltuser)

module.exports = router;