import express from 'express'
import mongoose from 'mongoose'
import productRoute from "./routes/productRoute.js"

const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use("/api/products", productRoute)

mongoose.connect("mongodb+srv://minatokiroisen77_db_user:XdObVDt2AoJ6VVUg@crud-api-backend.surgcqc.mongodb.net/Node-api?appName=crud-api-backend")
    .then(() => {
        console.log("Conneted to database!..!")
    })
    .catch(() => {
        console.log("Conneted failed!")
    })


app.listen(5000, () => console.log("Listening on port 5000"))

