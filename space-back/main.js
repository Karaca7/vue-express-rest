const express = require("express");

//use
app = express();

//views

app.set("view engine", "pug");
app.set("views", "Views");

var bodyParser = require("body-parser");

//

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

var cors = require("cors"); // ı  will remove deployment mode

app.use(cors());
let RouterHome = require("./Router/home");
let RouterApi = require("./Router/sapi");

// for parsing application/json

app.use("/", RouterHome);
app.use("/api", RouterApi);

app.listen(5050);
