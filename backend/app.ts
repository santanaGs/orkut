// SERVICES
const express = require('express')
const app = express()
const port = 3000

// UPDATE IMAGES
const middlewaresUpload = require('./middlewares/upload')

// DATA BASE
import { PrismaClient } from '@prisma/client'
import { userInfo } from 'os'
const prisma = new PrismaClient()

// CRYPT
const bcrypt = require('bcryptjs');

// USE LOCAL HOST
const cors = require('cors');

// MAIL
const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "db9f18805a46d2",
    pass: "0e803e562c4985"
  }
});

function sendMail(mail:string, name:string){
	transporter.sendMail({
		from: '"SantanaGs 🖥️" <santanags@gmail.com>',
		to: mail,
		subject: "Seja bem-vindo ao SantanaOrkut",
		text: "Hello world?",
		html: `
				<h2 style="color: #333;">Bem-vindo à nossa comunidade!</h2>
				<p>Olá ${name},</p>
				<p>É com grande alegria que damos as boas-vindas à nossa comunidade! Estamos muito felizes em tê-lo conosco.</p>
				<p>Na nossa rede social, você encontrará um espaço acolhedor para se conectar com amigos, compartilhar momentos especiais e explorar interesses em comum com pessoas de todo o mundo.</p>
				<p>Estamos comprometidos em tornar sua experiência conosco memorável e significativa. Seja você mesmo, faça novas amizades e aproveite ao máximo tudo o que temos para oferecer.</p>
				<p>Não hesite em explorar nossos recursos e funcionalidades. Se tiver alguma dúvida ou precisar de ajuda, nossa equipe de suporte está sempre disponível para ajudá-lo.</p>
				<p>Mais uma vez, seja bem-vindo à nossa comunidade! Mal podemos esperar para ver tudo o que você trará para o nosso ambiente.</p>
				<p style="margin-top: 30px;">Com os melhores cumprimentos,</p>
				<p>A equipe SantanaGs</p>
		`,
	});
}

app.use(express.json())
app.use(cors())

app.post('/register',middlewaresUpload.single('image') ,async (req:any, res:any, next:any) => {
	const dataUser = req.body

if (!req.file || !req.file.filename) {
	return res.status(400).json({
			error: true,
			message: "Nenhum arquivo foi enviado ou ocorreu um erro durante o upload."
	});
}

const fileName = req.file.filename;

dataUser.password = await bcrypt.hash(dataUser.password, 8); 

	await prisma.user.create({
		data: {
			name: dataUser.name,
			lastname: dataUser.lastname,
			email: dataUser.email,
			password: dataUser.password,
			dataNascimento: dataUser.dataNascimento,
			genero: dataUser.genero,
			image: fileName,
			createdAt: new Date(),
			updatedAt: new Date(),
		}
	}).then((sucess) => {
		sendMail(dataUser.email, dataUser.name)
		return res.status(200).json({
			erro: false,
			message: "Cadastro realizado com sucesso",
		})
	}).catch((err) => {
		return res.status(400).json({
			erro: true,
			message: "Erro",
			err,
		})
	})

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
