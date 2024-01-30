import { Arrow, Container, HeaderS, Logo, NavBar, NavItens, ProfileImage, ProfileName, UserDiv } from "./styles";


import logo from '../../assets/svgs/logo-orkut.svg'
import arrow from '../../assets/svgs/CaretDown.svg'
import Search from "../Search";

export default function Header() {
	return (
		<HeaderS>
			<Container>
				<Logo alt="logo do orkut" src={logo} />
				<NavBar>
					<NavItens href='#'>Inicio</NavItens>
					<NavItens href='#'>Perfil</NavItens>
					<NavItens href='#'>Comunidades</NavItens>
					<NavItens href='#'>Jogos</NavItens>
				</NavBar>
				<Search />
				<UserDiv>
					<ProfileImage alt="imagem do usuario" src="https://santanags.vercel.app/assets/1699491364289-zjy1wGYa.jpg" />
					<ProfileName>Santana</ProfileName>
					<Arrow src={arrow} alt="seta pra baixo" />
				</UserDiv>
			</Container>
		</HeaderS>
	)
}