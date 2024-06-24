var mongoClient = require("mongodb").MongoClient
console.log("Connecting to the MongoDB Database")
var url = ""
mongoClient.connect(url ,
    function(err,db){
        if(err) throw err 
        console.log("Connecting into the Collection")
        db.collection("students").find().sort({name:1}).toArray(
            function(err,result){
                if(err) throw err 
                console.log("The rows Affeccted are",result.insertedCount)
                db.close()
            }
        )

    }
)
console.log("Closing the DataBase")