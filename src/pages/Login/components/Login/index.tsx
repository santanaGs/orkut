import { Circle, Container, FormS, Header, Orkut } from "./styles";

import circle from '../../assets/svgs/ps_orkut.svg'
import { Input } from "../../../../components/Input/styles";

export default function LoginS() {
	return (
		<Container>
			<Header>
				<Circle alt="icone do orkut" src={circle} />
				<Orkut>Acesse o Orkut</Orkut>
			</Header>
			<FormS>
				<Input type="email" placeholder="E-mail" required />
				<Input type="password" placeholder="Senha" required />
				<Input type="submit" value={'Entrar na conta'} style={{ backgroundColor: "#ED2590", color: "white", cursor: "pointer", fontSize: "1rem" }} />
			</FormS>
		</Container>
	)
}