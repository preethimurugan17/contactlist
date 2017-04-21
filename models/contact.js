var mongoose=require('mongoose');
var schema=mongoose.Schema;
var ContactSchema=new schema({
    name : String,
    email : String,
    number : String
});
module.exports=mongoose.model('data',ContactSchema);