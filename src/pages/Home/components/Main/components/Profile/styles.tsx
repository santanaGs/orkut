import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	padding: 1.5rem 3rem;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	border-radius: 1rem;
	background: #FFF;
`

export const ProfileImageDiv = styled.div`
position: relative;
`

export const ProfileImageBorder = styled.img`

`

export const ProfileImage = styled.img`
	width: 10.625rem;
	height: 10.625rem;
	border-radius: 50%;
	position: absolute;
	left: 4%;
	top: 3%;
`

export const UserName = styled.p`
color: #4B4B4B;
font-size: 1.25rem;
font-weight: 600;
line-height: 1.5rem; /* 120% */
`

export const UserDetails = styled.p`
color: #4B4B4B;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.5rem; /* 171.429% */
`

export const Edit = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 1rem;
	background: #FDFEFF;
	padding: 1rem 4.8125rem;
`

export const ProfileDivS = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
`

export const EditText = styled.p`
color: #ED2590;
font-family: Inter;
font-size: 1.125rem;
font-style: normal;
font-weight: 500;
line-height: 1.5rem; /* 133.333% */
`