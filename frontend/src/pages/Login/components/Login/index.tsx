import { CheckDiv, Circle, Container, FormS, Header, LabelS, Orkut } from "./styles";

import circle from '../../assets/svgs/ps_orkut.svg'
import { Input } from "../../../../components/Input/styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function LoginS() {
	// Navigate
	const navigate = useNavigate();
	// Variables
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	// Functions
	async function login(e: any) {
		e.preventDefault();

		try {
			const res = await axios.post('http://localhost:3000/login', {
				email: email,
				password: password
			});
			sessionStorage.setItem('userId', res.data.user_id)
			navigate('/profile')
		} catch (error) {
			showSwal();
		}
	}

	// sweet modal
	const showSwal = () => {
		Swal.fire({
			title: "Ops, alguma coisa está errada!",
			text: `Verifique seu email e senha e tente novamente.`,
			icon: "warning",
			customClass: {
				confirmButton: 'confirmButton',
			},
		});
	}
	// Rendering
	return (
		<Container>
			<Header>
				<Circle alt="icone do orkut" src={circle} />
				<Orkut>Acesse o Orkut</Orkut>
			</Header>
			<FormS onSubmit={login}>
				<Input type="email" placeholder="E-mail" required onChange={(e) => setEmail(e.target.value)} />
				<Input type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)} />
				<CheckDiv>
					<Input style={{ width: 'unset', accentColor: '#ED2590' }} type="checkbox" id="remember" />
					<LabelS htmlFor="remember">Lembrar minha senha</LabelS>
				</CheckDiv>
				<Input type="submit" value={'Entrar na conta'} style={{ backgroundColor: "#ED2590", color: "white", cursor: "pointer", fontSize: "1rem" }} />
				<Input type="button" onClick={() => { navigate('/register') }} value={'Criar uma conta'} style={{ backgroundColor: "#EFF3F8", color: "#ED2590", cursor: "pointer", fontSize: "1rem" }} />
			</FormS>
		</Container>
	)
}