import express from 'express'
const app = express()

app.listen(5000, () => console.log("Listening on port 5000"))

app.get("/", (req, res) => {
    res.send("Hello World with CRUD Backend API Tutorials practical...")
})