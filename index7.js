var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDB Driver")
var url = ""
mongoClient.connect(
    url,function(err,db){
        if(err) throw err 
        db.collection("students").find().sort({'name':-1}).toArray(
            function(err,result){
                if(err) throw err 
                console.log("The Resultant array is",result)
                db.close()
            }
        )
    }

)
console.log("Database Closed Succesfully")
