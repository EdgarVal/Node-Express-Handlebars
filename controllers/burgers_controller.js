const express = require("express");
const burgerOrms = require("../models/burgers.js");
const router = express.Router();

router.get("/", function(req, res) { //--this route will redirect you to the index page
    res.redirect("/index");
});

router.get("/index", function (req, res) { //--this route is for the index page
    burgerOrms.selectAll(function(result) {
        let handlebarObject = {burger: result};
        res.render("index", handlebarObject);
        console.log(handlebarObject);
    });   
});

router.post("/burgerCreate", function (req, res) { //--this is for the creating/adding new burgers
    console.log("create runs");
    burgerOrms.insertOne(req.body.burger_name, function () {
        res.redirect("/index");
    });
});

router.post("/burger/eat/:id", function (req, res) { //--this is for the devoured burgers
    console.log(req);
    burgerOrms.updateOne(req.params.id, function () {
        res.redirect("/index");
    });
});

module.exports = router;
