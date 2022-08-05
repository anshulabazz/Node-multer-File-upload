const Images = require('../models/file.model')
const url = 'http://localhost:8080/imagees/'
const fs = require('fs')
//For stroing Multiple file upload...
exports.multiupload = async (req, res) => {
    const { title, description } = req.body
    let imagespaths = [];
    req.files.forEach(e => {
        const file = {
            filename: url + e.filename,
            name:e.filename
        }
        imagespaths.push(file)
    })
    const image = new Images({
        title, description, imagespaths
    })
    const data = await image.save()
    res.status(200).send(data)
}
exports.updateimage = (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let imagespaths = [];
    req.files.forEach(e => {
        const file = {
            filename: url + e.filename,
            name: e.filename
        }
        imagespaths.push(file)
    })

 
        
    Images.findByIdAndUpdate(req.params.id, { title,description,imagespaths }).then((data) => {


     res.status(200).send(data)

    })

}
exports.getbyid = (req, res) => {
    Images.findById(req.params.id).then((data)=> {
        res.status(200).send(data)
    })
}
//Delete multiple Files
exports.deletesbyid = (req, res) => {
    Images.findByIdAndDelete(req.params.id).then((data) => {
        data.imagespaths.forEach(e => {
            fs.unlink('./src/imagees/'+e.name, (err => {
                if (err) { }                
            }))
        })
        res.status(200).send('Dleted')
    })
}