var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";
// mongoClient.connect(url,function(err,db){
//     if(!err){
//         console.log("Connected to MongoDB........");
//     } else {
//         console.log(err);
//     }
// })



mongoClient.connect(url,function(err,db){
    if(!err){
        var dbo = db.db("demodb");
        dbo.collection("dblproducts").find().toArray(function(err,documents){
            if(!err){
                console.log(documents);
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})