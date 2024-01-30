// styled components
import { Container, DivS, Logo, NavBar, NavLinks } from "./styles";

// images
import logo from '../../assets/images/logo-orkut.png'

export default function Header() {
	return (
		<DivS>
			<Container>
				<Logo alt="imagem em svg representando o logo da empresa Orkut" src={logo} />
				<NavBar>
					<NavLinks href="#">Sobre o Orkut</NavLinks>
					<NavLinks href="#">Centro de segurança</NavLinks>
				</NavBar>
			</Container>
		</DivS>
	)
}