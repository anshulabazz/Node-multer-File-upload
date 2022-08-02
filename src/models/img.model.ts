const mongoose = require('mongoose')
const express = require('express')
const app = express()
const img = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imagepath: {
        type:String
    }

}, { timestamps: true })

const Img = mongoose.model('File-Nodeimg', img)

module.exports = Img