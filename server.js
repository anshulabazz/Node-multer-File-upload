const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app = express()
var corsoptions = {
    origin: 'http:localhost:'
}
app.use(express.json())
app.use(cors(corsoptions))
app.use(express.urlencoded({ extended: true }))
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true }).then(() => {
    console.log('Successfully connected to database')
}).catch(err => { console.log('Coudnt connected') })

const port = process.env.PORT
require('./src/router/image.router')(app)
app.listen(port, () => {
    console.log(`Successfully listen to port, ${port}`)
})