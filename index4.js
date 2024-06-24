var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDriver")
var url = ""
mongoClient.connect(url,
    function(err ,db){
        if(err) throw err 
        console.log("Connecting into the database")
        db.collection("Students").findOne({},
            function(err ,result){
                if(err) throw err 
                console.log("The result is",result)
            }
        )
    }
)
console.log("Found one record from the database")

