var mongoClient = require("mongodb").MongoClient
console.log("Connecting into the MongoDB Drivers in the Database")
var url = ""
mongoClient.connect(url,
    function(err,db){
        if(err) throw err 
        console.log("Connecting into the MongoDb Dtabase using the node js")
        var objects = [
            {'name':'Harsha','id':1},
            {'name':'Vardhan','id':2},
            {'name':'Karthik','id':3}
        ]
        db.insertMany(objects,function(err,result){
              if(err) throw err 
              console.log("Inserting Multiple Records in the Database")
              console.log("The inserted records count is",result.insertedCount)
              db.close()
        })
    }
)
console.log("The Database was closed succesfully")