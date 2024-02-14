import styled from "styled-components";

// styled components
export const DivS = styled.div`
	width: 100%;
	height: 5rem;
	background-color: #fff;
	display: flex;
	align-items: center;

`

export const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`

export const Logo = styled.img`
	width: 6.6875rem;
	height: 2rem;
`

export const NavBar = styled.nav`
	display: flex;
	align-items: center;
	gap: 1.5rem;
`

export const NavLinks = styled.a`
	text-decoration: none;
	color: #4B4B4B;
	font-size: 1.125rem;
	font-weight: 400;
	line-height: 1.5rem; /* 133.333% */
	transition: .3s;

	&:hover{
		color: #ED2590;
	}
`