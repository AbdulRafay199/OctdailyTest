const express = require("express");
const router = express.Router();
const { adduser, fetchuser, updateuser, dltuser } = require("../controllers/Usercontroller");

//All routes for user
router.post('/adduser', adduser)
router.get('/fetchuser', fetchuser)
router.patch('/updateuser/:id', updateuser)
router.delete('/deleteuser/:id', dltuser)

module.exports = router;