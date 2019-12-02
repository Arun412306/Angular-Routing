var express = require("express");
var mongoClient = require("mongodb").MongoClient;

var bodyparser = require("body-parser");

var url = "mongodb://127.0.0.1:27017";

var app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(bodyparser.json());

app.use(function(req,res,next){
    res.header("Access-control-Allow-Origin","*");
    res.header("Access-control-Allow-Headers","Origin,X-Requested-with,Content-Type-,Accept");
    res.header("Access-control-Allow-Methods","GET","POST","PUT");
    next();
})

app.get("/getproducts", function (req, res) {
    mongoClient.connect(url, function (err, db) {
        if (!err) {
            var dbo = db.db("demodb");
            dbo.collection("dblproducts").find().toArray(function (err, documents) {
                if (!err) {
                    res.send(documents);
                }
            })
        }
    })
})


app.post("/addproducts", function (req, res) {
    mongoClient.connect(url, function (err, db) {
        var dbo = db.db("demodb");
        var data = {
            Name: req.body.Name,
            Price: req.body.Price
        };

        dbo.collection("dblproducts").insertOne(data,function(err,result){
            if(!err){
                console.log("Record inserted...");
            } else {
                console.log(err);
            }
        })
    })
})

app.listen("8080");
console.log("Server Started :http://127.0.0.1:8080");