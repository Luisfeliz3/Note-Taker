var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

//middleware
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Routes
// ===========================================================

//
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });


//Get Api 
app.get("/api/", function(req, res) {
    res.send("THIS IS THE API");
  });

//Post Api
app.get("/api/notes", function(req, res) {
//   res.json(yoda);
res.send("API/NOTES");
});

//Delete Api
app.get("/api/notes/:id", function(req, res) {
//   res.json(darthmaul);
res.send("API/NOTES/ID/");
});

// Create a new Express route that leads users to the new Obi Wan Kenobi Data
// Follow the same format as the Yoda and Darth Maul routes
//

// YOUR CODE GOES HERE
//
//

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
