import express from 'express'
const router = express.Router()

import {
    createProduct,
    deleteProduct,
    getOneProduct,
    getProducts,
    updateProduct
} from '../controllers/productController'

router.get("/", getProducts)

router.post("", createProduct)

router.get("/:id", getOneProduct)

router.put("/:id", updateProduct)

router.delete("/:id", deleteProduct)

