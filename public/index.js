const express = require('express');
const app = express();
const MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://Dogo:Diego126126@cluster0.0ui46.mongodb.net/test"

app.use(express.static('public'));

app.listen(3000, function(){
    console.log("Ciao")
})
MongoClient.connect(url, {useNewUrlParser: true,useUnifiedTopology: true} , function(err, db){
    var database = db.db("PerSito");
})

function Invio(){
     alert("Ciao");
     var database = db.db("PerSito");
     database.collection("bug").insertone({ name:"Dogo"});
   
     
}