import express from 'express'
import mongoose from 'mongoose'
const app = express()


mongoose.connect("mongodb+srv://minatokiroisen77_db_user:XdObVDt2AoJ6VVUg@crud-api-backend.surgcqc.mongodb.net/?appName=crud-api-backend")


app.listen(5000, () => console.log("Listening on port 5000"))

app.get("/", (req, res) => {
    res.send("Hello World with CRUD Backend API Tutorials practical...")
})