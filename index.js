import express from 'express'
import mongoose from 'mongoose'
import Product from "./models/products.js"
const app = express()
app.use(express.json())

mongoose.connect("mongodb+srv://minatokiroisen77_db_user:XdObVDt2AoJ6VVUg@crud-api-backend.surgcqc.mongodb.net/Node-api?appName=crud-api-backend")
    .then(() => {
        console.log("Conneted to database!..!")
    })
    .catch(() => {
        console.log("Conneted failed!")
    })


app.listen(5000, () => console.log("Listening on port 5000"))


// Get All Products
app.get("/api/products", async (req, res) => {

    try {
        const products = await Product.find({ })

        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// Add Product
app.post("/api/products", async (req, res) => {
    try {
        const product =  await Product.create(req.body)
        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

})

// Get One Product
app.get("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findById(id)

        res.status(200).json(product)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Update Product
app.put("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return res.status(404).json({ message: "Product not found."})
        }
        
        const updateProduct = await Product.findById(id)
        res.status(200).json(updateProduct)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

// Remove Product
app.delete("/api/products/:id", async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json({ message: "Product not found." })
        }

        res.status(200).json({ message: "Product deleted successfully.."})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})