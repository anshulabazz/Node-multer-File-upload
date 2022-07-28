const mongoose = require('mongoose')
const Images = mongoose.model('File-Nodejs', new mongoose.Schema({
    file: {
        type: Buffer
    },
    title: {
        type: String
    },
    description: {
        type: String
    },
    url: {
        type:String
    }

}))

module.exports=Images