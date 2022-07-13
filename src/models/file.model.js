const mongoose = require('mongoose')
const Images = mongoose.model('File-Nodeja', new mongoose.Schema({
    file: {
        type: Buffer
    }

}))

module.exports=Images