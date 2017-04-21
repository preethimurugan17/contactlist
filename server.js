var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require("body-parser");
var config = require('./config/config');
var Info = require('./models/data');
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
config.connectDB();

app.get('/contactlist', function (req, res) {
     Info.find({}, function (err, docs) {
        if (err) {
            console.error(err);
        } else {
            res.json(docs);
        }
    });
});

app.post('/contactlist',function(req,res){
    var info = new Info(req.body);
    info.save(function(err,newContact){
        if(!err){
            res.json(newContact);
        }
    });
});
app.delete('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
 Info.remove({
      _id: req.params.id
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
            res.send(result);
        }
 })
});

app.get('/contactlist/:id', function (req, res) {
  var id = req.params.id;
  console.log(id);
 Info.findOne({
      _id: req.params.id
    }, function(err, result) {
        if (err) {
            console.error(err);
        } else {
            console.log(result);
            res.send(result);
        }
 })
});

app.put('/contactlist/:id', function(req, res) {

    Info.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            number: req.body.number
        }
    }, {
        new: true
    }, function(err, updateRecord) {
        if (err) {
            console.error(err);
        } else {
            console.log(updateRecord);
            res.send(updateRecord);
        }
    });
});






app.listen(3004);
console.log('magic happens on port 3004');