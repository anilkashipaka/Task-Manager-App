

const express = require('express')
const app = express()
const connectDB = require('./db/connect')
const notFound = require('./middleware/not-found')
require('dotenv').config()
//getting access to the routes
const tasks = require('./routes/tasks')
//setting the port number
const port = 3000

//middleware
app.use(express.static('./public'))
app.use(express.json())

//some endpoints

app.use('/api/v1/tasks', tasks)




const start = async () =>{
   try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`Server listening at ${port}...`))
   } catch (error) {
    console.log(error)
   }
}

start()
//set the server listeneing at port 
