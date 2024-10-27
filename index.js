// let http = require("http");

// // console.log(http)
// let app = (req, res) => {
//   res.end("Hello world from node.js");
// };
// http.createServer(app).listen(3000, () => {
//   console.log("searver start at port 3000");
// });

let port = process.env.port || 3000;
const express = require("express");
// console.log(express)
let app = express();

// app.use( (req,res) => {
//   res.send("Hello world from express");
// });
app.get("/", (req, res) => {
  res.send("Hello world from express");
});

app.listen(port, () => {
  console.log(`server start at ${port}`);
});
