const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const router = require("./controllers/burgers_controller.js"); //--give server access to the routes 
app.use("/", router);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});