
const express = require('express')
require('dotenv').config();
const app = express();
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(5000, () => {
            console.log("listening in port 5000");
        })        
    } catch(error) {
        console.log(error);
    }
}

start();

