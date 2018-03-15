var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("css")); //Tell express to use the new css directory

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/myRequest", function(req, res){
    res.render("myRequest.ejs");
});


app.get("*", function(req, res){
    res.render("notFound.ejs");
});

app.post("/addInfo", function(req, res){
    let newName = req.body.myName;
    res.render("addInfo.ejs", {newName: newName});
});


app.listen("8080", function(){
    console.log("Starting localhost:8080");
});