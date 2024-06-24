var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDriver")
var url = "mongodb://localhost:27017/MongoDatabase"; 
mongoClient.connect(url,
    function(err,db){
        if(err) throw err 
        console.log("Connected to the database of MongoDB")
        var obj = {'name':1,'Subject':'Physics'}
        db.collection("collection").insertOne(obj,
            function(err,result){
                if(err) throw err
                console.log("The Rows Affected in the database is ",result.insertedCount)
                db.close()
            }
        )


    }
)
console.log("Inserted single document in the MongoDB")