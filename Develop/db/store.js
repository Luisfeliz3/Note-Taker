const fs = require('fs');
const path = require('path');
var uniqid = require('uniqid');
const util = require('util');


const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class store {

      readNote(){
        const note =readFile('db/db.json','utf8');
       return readFile('db/db.json','utf8');
      }

      writeNote(){
       return writeFile('db/db.json',JSON.stringify(note));
      }

      addNote(note) {
        const {title,text} = note;
        if (!title || !text) {
          throw new Error("Title should nit be blank");  
        }
        const newNote = { title,text, id:uniqid()};
        return this.getNotes()
                   .then((notes)=>[...notes,newNote])
                   .then((updatedNotes)=>this.writeNotes(updatedNotes))
                   .then(()=> newNote);
    }

    getNotes() {
      return this.readNote().then((notes) => {
        console.log(notes);
        let parsedNotes;
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (error) {
          parsedNotes = [];
        }
        return parsedNotes;
      });
    }

    deleteNote(id) {
      return this.read()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
    }


  }




module.exports = new store();