import express from 'express'
import dotenv from 'dotenv'
import {notFound , errorHandler} from './middleware/errorMiddleware.js'
import connectDB from './config/database.js' 
import productRouts from './routs/productRouts.js'


dotenv.config()

connectDB()

const app = express()


app.get('/' , (req , res) => {
    res.send('API is running...')
})

app.use('/products', productRouts)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 5000

app.listen(port, console.log(`server running in ${process.env.NODE_ENV} mode on ${port}`))