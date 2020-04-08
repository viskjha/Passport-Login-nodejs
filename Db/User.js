const mongoose = require('mongoose');

const users = new mongoose.Schema({
    // id:{
    //     type:String
    //  },
     name:{
        type:String
     },
	email:{
        type:String
     },
    password:{
        type:String
    }
    
});

module.exports = User = mongoose.model('users',users);