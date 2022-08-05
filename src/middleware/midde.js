const multer = require("multer")
const diskStorage = multer.diskStorage({

    destination: (req, file, cb)=>{
        cb(null,'./src/imagees')
    },
    filename: (req, file, cb) => {
        const mimeType = file.mimetype.split('/')
        const filetype = mimeType[1]
        const filename = file.originalname + filetype
        cb(null,filename)
    }

})
const filefilter = (req, file, cb) => {
    const allowedtype = ['image/png', 'image/jpg', 'image/jpeg']
    allowedtype.includes(file.mimetype)?cb(null,true):cb(null,false)
}
const storages = multer({ storage: diskStorage, fileFilter: filefilter }).array('images',10)

module.exports=storages
// Muliple FIle upload Middleware

