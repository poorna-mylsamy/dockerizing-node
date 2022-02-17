const express = require('express');
const router = express.Router();
const User = require('./UserSchema');



//Get user
router.get('/', async(req, res) => {
//res.send('Hello World from Docker get method');
	try{
		var user_data = await User.find();
		res.status(200).json(user_data);
	}catch(err){
		console.log("Error in user data :"+err);
	}

  
});

//Add New user
router.post('/add', async(req, res) => {
	//console.log("-----name-----"+req.body.user_fname);	
	try{
		var add_user = await new User({
			user_fname:req.body.user_fname,
			user_lname:req.body.user_lname,
			city:req.body.city
			});
   		var save_user = await add_user.save();
		res.status(200).json(save_user);
	}catch(err){
		console.log("Error in add user data :"+err);
	}
	  //res.send('Hello World from Docker post method');
});

//Update user

router.put('/edit/:id',async(req,res) => {
	try{
		var edit_user = await User.updateOne({_id:req.params.id},{$set:      	{				
			user_fname:req.body.user_fname,
			user_lname:req.body.user_lname,
			city:req.body.city}}
			
			);
   		
		res.status(200).json(edit_user);
	}catch(err){
		console.log("Error in edit user data :"+err);
	}
	 // res.send('Hello World from Docker post method');
});

//Delete user

router.delete('/delete/:id',async(req,res) => {
	try{
		var remove_user = await User.remove({_id:req.params.id});   		
		res.status(200).json(remove_user);
	}catch(err){
		console.log("Error in delete user data :"+err);
	}
	 // res.send('Hello World from Docker post method');
});

module.exports = router;
