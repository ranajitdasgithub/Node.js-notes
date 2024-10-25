let http = require("http");

// console.log(http)
let app = (req, res) => {
  res.end("Hello world from node.js");
};
http.createServer(app).listen(3000, () => {
  console.log("searver start at port 3000");
});
