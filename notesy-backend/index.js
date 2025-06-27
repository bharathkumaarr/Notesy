const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const notesyRoutes = require('./routes/notesyRoutes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())


app.use('/notesy', notesyRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('db connected');
        app.listen(PORT, ()=>{
            console.log('server running at port 3000')
        })
    })
    .catch(err=>{
        console.error(err)
    })