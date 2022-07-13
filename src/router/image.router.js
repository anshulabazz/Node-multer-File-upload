module.exports = function (app) {
    const express = require('express')
    const router = express.Router()
    const upload = require('../middleware/midde')
    const controller = require('../controller/image.controller')
   
    router.post('/upload', upload.single('file'), controller.uploadimage)
    router.get('/get/:id', controller.getimage)
    app.use('/',router)
}