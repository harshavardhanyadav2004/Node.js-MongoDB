var mongoClient = require("mongodb").MongoClient 
console.log("Connecting into the Mongo Driver") 
var url = ""
mongoClient.connect(url,
    function(err,db){
        if (err) throw err 
        console.log("Connecting into the Database")
        var query = {name :'Harsha'}
        db.collection("Students").find(query).toArray(
            function(err,result){
                if(err) throw err
                console.log("The No of rows Affected in the rows",result)
                db.close()
            }
        )
    }
)