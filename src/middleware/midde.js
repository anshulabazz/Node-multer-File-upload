const multer = require('multer')
const upload = multer({
    limit: {
        fileSize: 3000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png|jpeg)$/)) {
            return cb(new Error('Please Upload image'))
        }
        cb(undefined,true)
    }

})
module.exports=upload