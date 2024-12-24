/*  fs module  */
const fs = require("fs");

fs.writeFileSync("notes.txt", "Notes created by node.js");
fs.appendFileSync("notesAppend.txt", " This is an new update /n");

/* require other function module  */
const { add } = require("./utils");
let sum = add(3, 5);
console.log(sum);

/* npm validator  */
const validator = require("validator");
let checkEmail = validator.isEmail("ranajit@gmail.com");
console.log(checkEmail); //true

let checkUrl = validator.isURL(
  "htttps://chatgpt.com/c/6700e1fb-912c-8007-a829-dbc9478c06f5"
);
console.log(checkUrl); //true

/* npm chalk  */
const chalk = require("chalk");

console.log(chalk.green("Hello world!"));
const log = console.log;

log(chalk.blue("Hello") + " World" + chalk.red("!"));
log(chalk.blue.bgRed.bold("Hello world!"));
log(chalk.yellow("Hello", "Foo", "bar", "biz", "baz"));
