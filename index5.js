var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDriver")
var url = ""
mongoClient.connect(url,
    function(err,db){
        if(err) throw err 
        console.log("Connecting into the MongoDB Driver")
        db.collection("students").find({}).toArray(
            function(err,result){
                console.log("The resultant array is",result)
                db.close()
            }
        )
        console.log("The Database is connected succesfully")
    }
)