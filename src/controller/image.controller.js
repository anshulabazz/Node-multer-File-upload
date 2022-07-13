const Images = require('../models/file.model')
const sharp = require('sharp')

exports.uploadimage =  async (req, res) => {
    const buffer =  await sharp(req.file.buffer).resize(500,500).png().toBuffer()
    const image = new Images({file:buffer})
    image.save().then((data) => {
        res.status(200).send(data)
    }).catch(err => {
        res.status(404).send("there is probelm")
    })
}
exports.getimage = (req, res) => {
    Images.findById(req.params.id).then((data) => {
        res.set('Content-Type', 'image/png')
        res.send(data.file)

    })
}