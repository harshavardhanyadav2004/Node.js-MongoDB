var mongoClient = require("mongodb").MongoClient 
console.log("Connecting into the MongoDB Database")
var url = "mongodb://localhost:27017/MongoDatabase"; 
mongoClient.connect(url ,
    function(err,db){
        if(err) throw err 
        console.log("Connected to the database succesfully")
        db.close()
    }
)