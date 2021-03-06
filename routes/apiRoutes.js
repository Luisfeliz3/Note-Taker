// API routes

module.exports = function (app, fs) {
  let notesDB = require("../db/db.json");
  let dataPath = "./db/db.json";
  // read file
  app.get("/api/notes", (req, res) => {
    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    var newNote = req.body;
    var id = notesDB.length.toString();
    console.log(id + newNote.id + '<<<<<<<<<<-------------');
    newNote.id = id;
    notesDB.push(newNote);
    res.json(newNote);
    fs.writeFileSync(dataPath, JSON.stringify(notesDB, null, 2));
    res.json(notesDB);
  });

  app.delete("/api/notes/:id", (req, res) => {
    let savedNotes = JSON.parse(
      fs.readFileSync(dataPath, "utf8", (err) => {
        if (err) throw err;
      })
    );

    let noteID = req.params.id;
    let newID = 0;

    savedNotes = savedNotes.filter((currentNote) => {
      return currentNote.id != noteID;
    });

    for (currentNote of savedNotes) {
      currentNote.id = newID.toString();
      newID++;
    }

    fs.writeFileSync(dataPath, JSON.stringify(savedNotes, null, 2));
    res.json(savedNotes);
  });
};
