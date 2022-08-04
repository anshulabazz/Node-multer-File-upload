module.exports = function (app) {
    const express = require('express')
    const router = express.Router()
    const upload = require('../middleware/midde')
    const storage = require('../middleware/mid')
    const controller = require('../controller/image.controller')
    const controllers = require('../controller/img.controller')
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    router.post('/upload', controller.uploadFiles)
    router.get('/getfile', controller.getListFiles)
    router.post('/up', upload.single('file'), controller.uploadf)
    router.get('/getall', controller.getAll)
    router.delete('/delete/:id', controllers.deletebyid)
    router.get('/profile', controllers.yesget)
    router.post('/uploads', storage, controllers.postprofile)
    app.use('/', router)
}