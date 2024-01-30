const express = require('express')
const app = express()
const port = 3000

const middlewaresUpload = require('./middlewares/upload')

app.post('/register',middlewaresUpload.single('image') ,async (req, res, next) => {
  return res.json({
		erro: false,
		message: "Upload",
	})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
