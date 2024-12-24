const fs = require("fs");

// let book = {
//   name: "Rich Dad Poor Dad",
//   author: "Robert Kiyosaki",
// };
// let data = JSON.stringify(book);

// fs.writeFileSync("book.json", data);

const bookBuffer = fs.readFileSync("book.json");
const bookData = bookBuffer.toString();
console.log(bookData);

function loadNotes() {
  try {
    const noteBuffer = fs.readFileSync("sampleNote.json");
    const noteData = noteBuffer.toString();
    return JSON.parse(noteData);
  } catch (err) {
    return [];
  }
}
console.log(loadNotes());
