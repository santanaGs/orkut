const multer = require('multer') // upload de arquivos

module.exports = (multer({
	storage : multer.diskStorage({
		destination:  (req, file, cb) => {
			cb(null, '../frontend/public/upload/users')
		},
		filename:  (req, file, cb) => {
			// cb(null, file.fieldname + '-' + Date.now())
			cb(null, Date.now().toString() + "_" + file.originalname)
		}
	}),
	fileFilter: (req, file, cb) => {
		const extesaoImg = ["image/png", "image/jpg", "image/jpeg"].find(formatoAceito => formatoAceito == file.mimetype);

		if(extesaoImg){
			return cb(null, true);
		} return cb(null, false)
	}
}))
