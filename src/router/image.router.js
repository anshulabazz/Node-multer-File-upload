module.exports = function (app) {
    const express = require('express')
    const router = express.Router()
    const storages = require('../middleware/midde')
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
    router.post('/upload', storages, controller.multiupload)
    router.put('/update/:id', storage, controller.updateimage)
    router.get('/get/:id', controller.getbyid)
    router.delete('/remove/:id', controller.deletesbyid)
    router.delete('/delete/:id', controllers.deletebyid)
    router.get('/profile', controllers.yesget)
    router.post('/uploads', storage, controllers.postprofile)
    app.use('/', router)
}