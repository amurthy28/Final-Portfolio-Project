var express= require("express");
var app= express();
var cors= require("cors");

//create account
app.get("/account/create/:name/:email/:password", function (req, res){
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    })
})

//login user
app.get("/account/login/:email/:password", function (req, res){
    res.send({
        email: req.params.email,
        password: req.params.password
    })
})

//all accounts
app.get("/account/all", function (req, res){
    res.send({
        name: "peter",
        email: "peter@mit.edu",
        password: "password"
    })
})

var port = 3000;
app.listen(port);
console.log("Running on port "+ port);