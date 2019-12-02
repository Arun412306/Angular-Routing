var fs = require("fs");

// var data = fs.readFileSync("D:\\Naresh\\Angular\\help.txt");

fs.readFile("D:\\Naresh\\Angular\\help.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    } else {
        console.log(err);
    }
})

console.log("Read Complete");