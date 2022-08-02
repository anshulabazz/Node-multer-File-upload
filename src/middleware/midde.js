const util = require("util");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
/*var storage = new GridFsStorage({
    url: process.env.MONGODB_URL,
    file: (req, file) => {
        const match = ["image/png", "image/jpeg"];
        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-bezkoder-${file.originalname}`;
            return filename;
        }
        return {
            bucketName: process.env.imgBucket,
            filename: `${Date.now()}-bezkoder-${file.originalname}`
        };
    }
});
var uploadFiles = multer({ storage: storage }).single("file");
var uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
*/



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