import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import usersRoute from './routes/users.js'
import roomsRoute from './routes/rooms.js'
mongoose.set('strictQuery', true);


const app = express()
dotenv.config()

const connect = async () => {
    try {
        const db =  await mongoose.connect(process.env.MONGO);
        console.log('connected db')
      } catch (error) {
        throw error;
      }
}

mongoose.connection.on("disconnected", () => {
    console.log('mongodb disconnected')
}
)
mongoose.connection.on("connected", () => {
    console.log('mongodb connected')
})

app.use(express.json())
// middleWhere

app.use('/api/v1/auth', authRoute)
app.use('/api/v1/hotels', hotelsRoute)
app.use('/api/v1/users', usersRoute)
app.use('/api/v1/rooms', roomsRoute)

// app.get("/", (req, res) => {
//     res.send('hello request')
// })

app.listen(8800, () => {
    connect()
    console.log('start sever success !')
})