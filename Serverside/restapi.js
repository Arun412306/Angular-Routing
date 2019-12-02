var express = require("express");

var app = express();

app.get("/",function(req,res){
    res.send("GET - Request for Home");
})

app.get("/getproducts",function(req,res){
    res.send("GET - Request for Products Data");
})

app.get("/getproducts/1",function(req,res){
    res.send("GET - Requested for specific product ")
})

app.get("/c*t",function(req,res){
    res.send("GET - Wild card request for page");
})

app.post("/addproduct",function(req,res){
    res.send("Post - Record Inserted");
})

app.put("/updateproduct",function(req,res){
    res.send("PUT - Record Inserted");
})

app.delete("/deleteproduct",function(req,res){
    res.send("Delete - Record Deleted");
})

app.listen(8080);
console.log("Server Started:http://127.0.0.1:8080");