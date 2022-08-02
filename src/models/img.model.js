var mongoose = require('mongoose');
var express = require('express');
var app = express();
var img = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imagepath: {
        type: String
    }
}, { timestamps: true });
var Img = mongoose.model('File-Nodeimg', img);
module.exports = Img;
//# sourceMappingURL=img.model.js.map