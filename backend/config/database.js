import mongoose from 'mongoose'

const url = 'mongodb://127.0.0.1:27017'


const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true
        })
        console.log(`mongoDb connected : ${conn.connection.host}`)
    }catch(error){
        console.log(`error : ${error.message}`)
        process.exit(1)
    }
}

export default connectDB