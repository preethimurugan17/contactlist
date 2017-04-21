'use strict';
var mongoose=require('mongoose'),
 Schema=mongoose.Schema;
var ContactSchema=new Schema({
    name : { 
        type:String
    },
    email: {
        type:String 
    },
    number:{
        type: String 
    }
   
});
module.exports=mongoose.model('Info',ContactSchema);