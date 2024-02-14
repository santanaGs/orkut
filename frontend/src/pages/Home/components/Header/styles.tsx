import styled from "styled-components";

export const HeaderS = styled.div`
	height: 6rem;
	background: #ffffff;
	justify-content: center;
	align-items: center;
	display: flex;
`

export const Logo = styled.img`

`

export const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const NavBar = styled.nav`
	display: flex;
	align-items: center;
	gap: 2.5rem;
`

export const NavItens = styled.a`
	color: #4B4B4B;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem; /* 150% */
	text-decoration: none;
	transition: .3s;

	&:hover{
		color: #ED2590;
	}
`

export const UserDiv = styled.div`
	display: flex;
	align-items: center;
	gap: .8rem;
	position: relative;
`

export const ProfileImage = styled.img`
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
`

export const ProfileName = styled.p`
	color: #4B4B4B;
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.5rem; /* 150% */
`

export const Arrow = styled.img``

export const ArrowButton = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;
`

export const Logout = styled.button`
	width: 100%;
	height: 50px;
	background-color: #ffffff;
	position: absolute;
	top: 120%;
	border-radius: 10px;
	border: 2px solid #ED2590;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: .3s;
	color: #ED2590;


	&:hover{
		background-color: #ED2590;
		border-color: #fff;
		color: #fff;
	}
`

export const LogoutText = styled.p`
	font-size: 1rem;
	font-weight: bold;
`