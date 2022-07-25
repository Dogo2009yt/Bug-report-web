const MongoClient = require("mongodb").MongoClient;
var url ="mongodb+srv://Dogo:Diego126126@cluster0.0ui46.mongodb.net/test"
MongoClient.connect(url , function(err, db){
     var database = db.db("PerSito");
})
function Invia(){
     var name = document.getElementById("nome")
     var database = db.db("PerSito");
     database.collection("collection1").insertOne({ nome: name})
}