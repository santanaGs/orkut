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