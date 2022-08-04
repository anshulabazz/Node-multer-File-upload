const Img = require('../models/img.model')
const fs = require('fs')

exports.postprofile = async (req, res) => {
    const { title, description } = req.body
    const imagepath = 'http://localhost:8080/images/'+req.file.filename
    const name= req.file.filename
    const img = new Img({
        title,
        description,
        imagepath,
        name
    })
    const create = await img.save()
    res.status(200).json(create)
}
exports.yesget = async (req, res) => {
    const result = await Img.find({})
    res.status(200).json(result)
}
exports.deletebyid = async (req, res) => {
    Img.findByIdAndDelete(req.params.id).then((data) => {
        fs.unlink('./src/images/'+data.name, (err => {
            if (err) {
                console.log(err)
            }
            else {
                res.status(200).json(data)
            }
        }))

       
    })
}
