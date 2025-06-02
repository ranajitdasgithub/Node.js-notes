const express = require("express");


const app = express()

app.get("/", (req, res) => {
    res.send("Hello from express")
})

app.get("books", (req, res) => {
    res.send("Books to show")
})

app.get("/books/new", (req, res) => {
    
    console.log(params)

    res.send("New book found")

})


app.listen(8000, () => {
    console.log("Server started at port 8000")
})
