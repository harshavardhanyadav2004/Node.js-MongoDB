var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the DataBase")
var url = ""
mongoClient.connect(url,
    function(err,db){
        console.log("Connecting into the Database")
        db.collection("Students").remove(
            {name : 'Harsha'},
            function(err,result){
                if(err) throw err 
                console.log(result.result.n)
                console.log("Closing the DataBase")
                db.close()
            }
        )
    }
)