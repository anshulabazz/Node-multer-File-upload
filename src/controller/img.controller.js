const Img = require('../models/img.model')

exports.postprofile = async (req, res) => {
    const { title, description } = req.body
    const imagepath = 'http://localhost:8080/images/'+req.file.filename

    const img = new Img({
        title,
        description,
        imagepath
    })
    const create = await img.save()
    res.status(200).json(create)
}
exports.yesget = async (req, res) => {
    const result = await Img.find({})
    res.status(200).json(result)
}