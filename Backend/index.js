const express = require('express');
const mongodbconnection = require("./db");
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true}));

app.use('/user', require('./routes/user'));

app.listen(port,()=>{
    console.log(`Octdaily Test Backend is working at http://localhost:${port}`)
})
mongodbconnection();