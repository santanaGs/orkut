const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

const middlewaresUpload = require('./middlewares/upload')

app.use(express.json())
app.use(cors())

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

app.post('/register',middlewaresUpload.single('image') ,async (req:any, res:any, next:any) => {
	const dataUser = req.body

console.log(req.body)

if (!req.file || !req.file.filename) {
	return res.status(400).json({
			error: true,
			message: "Nenhum arquivo foi enviado ou ocorreu um erro durante o upload."
	});
}

const fileName = req.file.filename;

console.log(req.file)

// // Retorna o nome do arquivo na resposta
// res.json({
// 		success: true,
// 		message: "Arquivo enviado com sucesso.",
// 		fileName: fileName
// });

	await prisma.user.create({
		data: {
			email: dataUser.email,
			createdAt: new Date(),
			lastname: dataUser.lastname,
			name: dataUser.name,
			updatedAt: new Date(),
			image: fileName
		}
	}).then((sucess) => {
		return res.json({
			erro: false,
			message: "Upload",
			sucess
		})
	}).catch((err) => {
		return res.json({
			erro: true,
			message: "Erro",
			err,
			dataUser
		})
	})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
