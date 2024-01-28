import { CheckDiv, Circle, Container, FormS, Header, LabelS, Orkut } from "./styles";

import circle from '../../assets/svgs/ps_orkut.svg'
import { Input } from "../../../../components/Input/styles";
import { useNavigate } from "react-router-dom";

export default function LoginS() {
	// Navigate
	const navigate = useNavigate();
	// Rendering
	return (
		<Container>
			<Header>
				<Circle alt="icone do orkut" src={circle} />
				<Orkut>Acesse o Orkut</Orkut>
			</Header>
			<FormS>
				<Input type="email" placeholder="E-mail" required />
				<Input type="password" placeholder="Senha" required />
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