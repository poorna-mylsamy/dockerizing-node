'use strict';

const express = require('express');
const mongoose = require('mongoose');
const body_parser = require('body-parser');
const user_rt = require('./users');

// Constants
const PORT = 3000;
//const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use('/users',user_rt);

//Db Connection
mongoose.connect(`mongodb://mongo:27017/my_app`,(err)=>{
if(!err){
	console.log("DB connected successfully..");
}else{
console.log(err);
}
});

app.get('/', (req, res) => {
  res.send('Hey Hello World from Docker!....');
});

//app.listen(PORT, HOST);
app.listen(PORT, () => {
    console.log("Server gets  connected...")
});
