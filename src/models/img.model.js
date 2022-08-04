const mongoose = require('mongoose');
const fs = require('fs')
const img = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imagepath: {
        type: String
    },
    name: {
        type:String
    }
}, { timestamps: true });

const Img = mongoose.model('File-Nodeimg', img);
module.exports = Img
