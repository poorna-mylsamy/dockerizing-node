const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({

	user_fname : {
		type:String,
		required :true
	},
	user_lname : {
		type:String,
		required:true
	},
	city : {
		type:String,
		required:true
	},
	created : {
		type : Date,
		default : Date.now
	}

});

module.exports = mongoose.model("users",user_schema);
