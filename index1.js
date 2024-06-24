var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDB Server using the node js ")
var url = "mongodb://localhost:27017/MongoDatabase"; 
mongoClient.connect(url ,
    function(err ,db){
        if(err) throw err 
        console.log("Connected to the Database ");
        db.createCollection("Collection",
            function(err,res){
                if(err) throw err 
                console.log("Created Collection in the MongoDatabase")
                db.close();
            })
    }

)
console.log("Closed Database Succesfully")
