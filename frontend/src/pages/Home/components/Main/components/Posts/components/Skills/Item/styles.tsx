import styled from "styled-components";

export const Container = styled.div`
display: flex;
flex-direction:column;
justify-content: flex-start;
gap: .5rem;
height: 3rem;
width: max-content;
`

export const Label = styled.p`
	color: #4B4B4B;
	font-size: 0.875rem;
	font-weight: 400;
`

export const Icon = styled.img`
	width: 1.125rem;
	height: 1.125rem;
`

export const IconDiv = styled.div`
display: flex;
align-items: center;
gap: .5rem;
`