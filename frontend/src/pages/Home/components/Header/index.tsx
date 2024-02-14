import { Arrow, ArrowButton, Container, HeaderS, Logo, Logout, LogoutText, NavBar, NavItens, ProfileImage, ProfileName, UserDiv } from "./styles";


import logo from '../../assets/svgs/logo-orkut.svg'
import arrow from '../../assets/svgs/CaretDown.svg'
import Search from "../Search";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
	let name: string = sessionStorage.getItem("name");
	const [logout, setLogout] = useState<boolean>(false)
	const navigate = useNavigate();

	function exit() {
		navigate('/')
		sessionStorage.clear()
	}

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
					<ProfileName>{name}</ProfileName>
					<ArrowButton onClick={() => { setLogout(!logout) }}>
						<Arrow src={arrow} alt="seta pra baixo" />
					</ArrowButton>
					{logout && (
						<Logout onClick={exit}>
							<LogoutText>Sair</LogoutText>
						</Logout>
					)}
				</UserDiv>
			</Container>
		</HeaderS>
	)
}