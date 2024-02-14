import styled from "styled-components";

export const Container = styled.div`
	width: 50%;
	border-radius: 1rem;
	background: #FFF;
	margin: 0 auto;
	padding: 3rem;
	height: 100%;

	@media screen and (max-width: 768px) {
		width: 90%;
		padding: 1rem;
	}
`

export const FormS = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.5rem;
	margin-top: 3rem;
`

export const InputS = styled.input`
padding: 1rem;
border-radius: 0.5rem;
background: #EFF3F8;
width: 100%;
border: none;
outline-color: #ED2590;
`

export const Select = styled.select`
padding: 1rem;
border-radius: 0.5rem;
background: #EFF3F8;
width: 100%;
border: none;
outline-color: #ED2590;
`

export const TwoInputsDiv = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 100%;
`

export const Label = styled.p`
	color: #868686;
	font-size: 0.75rem;
	font-weight: 400;
`

export const DivS = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	gap: .5rem;
`

export const InputDiv = styled.div`
	display: flex;
	flex-direction:column;
	width: 100%;
	align-items: flex-start;
`

export const Error = styled.span`
	color: #ED2590;
	font-size: 0.75rem;
	font-weight: 400;
	text-align: left;
	margin-top: .5rem;
`