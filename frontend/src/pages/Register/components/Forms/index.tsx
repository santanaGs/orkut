// imports
import { useForm } from 'react-hook-form'
import { Container, DivS, Error, FormS, InputDiv, InputS, Label, Select, TwoInputsDiv } from './styles';
import { Circle, Header, Orkut } from '../../../Login/components/Login/styles';
import circle from './assets/svgs/ps_orkut.svg'
import { useState } from 'react';
import axios from 'axios';

export default function Forms() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const [image, setImage] = useState('');
	const onSubmit = async (data: any, e) => {
		upload();
	};

	const upload = async () => {
		const headers = {
			'headers': {
				'Content-Type': 'multipart/form-data'
			}
		}

		const data = new FormData();
		data.append('image', image);

		await axios.post('http://localhost:3000/register', data, headers).then((sucess) => {
			console.log('SUCESSO', sucess)
		}).catch((erro) => {
			console.log('ERRO', erro)
		})

	}

	console.log(watch("example"))
	// Rengering
	return (
		<Container>
			<Header>
				<Circle alt="icone do orkut" src={circle} />
				<Orkut>Cadastre-se</Orkut>
			</Header>
			<FormS onSubmit={handleSubmit(onSubmit)}>
				<TwoInputsDiv>
					{/* NAME */}
					<InputDiv>
						<InputS {...register("name", { required: true })} placeholder='Nome' />
						{errors.name && <Error>Campo obrigatorio</Error>}
					</InputDiv>
					{/* LAST NAME */}
					<InputDiv>
						<InputS {...register("lastname", { required: true })} placeholder='Sobrenome' />
						{errors.lastname && <Error>Campo obrigatorio</Error>}
					</InputDiv>
				</TwoInputsDiv>
				{/* EMAIL */}
				<InputDiv>
					<InputS {...register("email", { required: true })} placeholder='Celular ou email' />
					{errors.email && <Error>Campo obrigatorio</Error>}
				</InputDiv>
				<InputDiv>
					<InputS {...register("password", { required: true, minLength: 8 })} placeholder='Senha' type='password' />
					{errors.password && <Error>Sua senha precisa ter no minímo 8 caracteres</Error>}
				</InputDiv>
				<DivS>
					<Label>Data de Nascimento</Label>
					<InputS {...register("date", { required: true })} type='date' />
				</DivS>
				<DivS>
					<Label>Gênero</Label>
					<Select name="select">
						<option value="" selected>Selecionar</option>
						<option value="masculino" >Masculino</option>
						<option value="feminino" >Feminino</option>
						<option value="outros">Outros</option>
					</Select>
				</DivS>
				<DivS>
					<Label>Foto de perfil</Label>
					<InputS
						id='fileInput'
						{...register("file", { required: true })}
						onChange={(e) => {
							const file = e.target.files[0];
							setImage(file)
							console.log(file)
						}}
						type='file'
					/>
					{errors.file && <Error>Campo obrigatorio</Error>}
				</DivS>

				<InputS type="submit" style={{ backgroundColor: "#ED2590", color: "white", cursor: "pointer", fontSize: "1rem" }} />
			</FormS>
		</Container>
	)
}