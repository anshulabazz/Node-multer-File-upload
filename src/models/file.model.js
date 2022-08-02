const mongoose = require('mongoose')
const express = require('express')
const app= express()
const imgsch = new mongoose.Schema({
    file: {
        data: Buffer,
        contentType: String,
        name: String
    },
    title: {
        type: String
    },
    description: {
        type: String
    }

},{ timestamps: true })

const Images = mongoose.model('File-Nodejs',imgsch)

module.exports=Images