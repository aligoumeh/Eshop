import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/database.js' 
import products from "./data/products.js"

dotenv.config()

connectDB()

const app = express()

app.get('/' , (req , res) => {
    res.send('API is running...')
})

app.get('/products' , (req , res) => {
    res.json(products)
})

app.get('/products/:id' , (req , res) => {
    const product = products.find((p) => p._id === req.params.id)
    res.json(product)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on ${port}`))