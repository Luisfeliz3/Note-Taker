
const store = require("../db/store");
const router = require('express').Router();



module.exports = function (app) {

  app.get("/api", (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/notes.html"));

  });

  app.get("/api/:id", (req, res) => {
    // res.sendFile(path.join(__dirname, "../public/index.html"));



  });

};
