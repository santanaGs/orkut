import styled from "styled-components";

export const SearchDiv = styled.div`
	position: relative;
	
`

export const Input = styled.input`
	width: 22.1875rem;
	padding: 0.625rem 0rem 0.625rem 3rem;
	border-radius: 0.5rem;
	background: #EFF3F8;
	border: none;
	outline: none;

	&::placeholder{
		color: #B4AEAE;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5rem; /* 150% */
	}
`
export const SearchIcon = styled.img`
	position: absolute;
	left: 3%;
	top: 15%;
`