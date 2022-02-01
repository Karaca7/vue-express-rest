const express = require("express");
var bodyParser = require("body-parser");
const { type } = require("express/lib/response");

router = express.Router();

let liste = [
  { name: "karaca", lastname: "yilmaz" },
  { name: "karaca2", lastname: "yilmaz" },
  { name: "karaca3", lastname: "yilmaz" },
];

router.get("/:name", (req, res) => {
  //("/:name/:soyad
  let userName = req.params.name;

  console.log(typeof userName);
  let tempUser = null;
  console.log(typeof liste[1].name);
  for (let i = 0; i < liste.length; i++) {
    if (liste[i].name == userName) {
      tempUser = liste[i];
      console.log(req.params.name);
    }
  }
  res.json(tempUser);
});

module.exports = router;
