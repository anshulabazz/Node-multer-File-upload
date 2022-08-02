const multer = require('multer')


const diskStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null,'./src/images')
	},
	filename: (req, file, cb) => {
		const mimeType = file.mimetype.split('/')
		const filetype = mimeType[1]

		const filename = file.originalname +'.' +filetype
		cb(null,filename)
	}

})
const filefilter = (req, file, cb) => {
	const allowtypes = ['image/png', 'image/jpeg', 'image/jpg']
	allowtypes.includes(file.mimetype) ? cb(null, true) : cb(null,false)
}
const storage = multer({ storage: diskStorage, fileFilter: filefilter }).single('image')
module.exports = storage