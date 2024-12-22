const fs = require("fs");

fs.writeFileSync("notes.txt", "Notes created by node.js");

fs.appendFileSync("notesAppend.txt", " This is an new update");

