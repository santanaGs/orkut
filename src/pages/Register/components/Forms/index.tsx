// imports
import { useForm } from 'react-hook-form'
import { Input } from '../../../Home/components/Search/styles';
import { Container, DivS, FormS, InputS, Label, Select, TwoInputsDiv } from './styles';
import { Circle, Header, Orkut } from '../../../Login/components/Login/styles';
import circle from './assets/svgs/ps_orkut.svg'

export default function Forms() {
	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = (data: any) => console.log(data);

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
					<InputS {...register("name", { required: true })} placeholder='Nome' />
					<InputS {...register("lastname", { required: true })} placeholder='Sobrenome' />
				</TwoInputsDiv>
				<InputS {...register("email", { required: true })} placeholder='Celular ou email' />
				{errors.email && <span>Campo obrigatorio</span>}
				<InputS {...register("password", { required: true, minLength: 8 })} placeholder='Senha' />
				{errors.password && <span>Sua senha precisa ter no minímo 8 caracteres</span>}
				<DivS>
					<Label>Data de Nascimento</Label>
					<InputS {...register("date", { required: true })} type='date' />
				</DivS>
				<DivS>
					<Label>Gênero</Label>
					<Select name="select">
						<option value="masculino">Masculino</option>
						<option value="feminino" selected>Feminino</option>
						<option value="outros">Outros</option>
					</Select>
				</DivS>


				<InputS type="submit" style={{ backgroundColor: "#ED2590", color: "white", cursor: "pointer", fontSize: "1rem" }} />
			</FormS>
		</Container>
	)
}