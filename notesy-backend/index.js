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
app.get('/', (req,res)=>{
    res.send('notesy backend activated, happy writing:)')
})

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        // console.log('db connected');
        app.listen(PORT)
    })
    .catch(err=>{
        console.error(err)
    })