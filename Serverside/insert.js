var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://127.0.0.1:27017";


mongoClient.connect(url, function (err, db) {
    if (!err) {

        var dbo = db.db("demodb");
        var record = {
            Name: "watch",
            Price:  5000.15
        };

        dbo.collection("dblproducts").insertOne(record,function (err, result) {
            if (!err) {
                console.log("Record Inserted...");
            } else {
                console.log(err);
            }
        })
    } else {
        console.log(err);
    }
})