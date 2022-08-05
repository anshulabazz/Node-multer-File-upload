const mongoose = require('mongoose')
const express = require('express')
const app= express()
const imgsch = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imagespaths: [Object],

},{ timestamps: true })

const Images = mongoose.model('File-Nodejs',imgsch)

module.exports = Images
// Multiple File upload Model