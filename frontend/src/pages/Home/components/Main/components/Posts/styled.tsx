import styled from "styled-components";

export const Container = styled.div`
width: 37rem;
border-radius: 1rem;
background: #FFF;
padding: 2rem 1.5rem;

@media screen and (max-width: 768px) {
		width: 90%;
		margin: 0 auto;
		margin-top: 2rem;
	}
`

export const Hello = styled.h1`
color: #4B4B4B;
font-size: 1.25rem;
font-weight: 500;
`

export const StatusDiv = styled.div`
width: 100%;
border-radius: 0.625rem;
background: #EFF3F8;
padding: 1rem;
margin-top: 1rem;
position: relative;
`

export const StatusText = styled.p`
color: #4B4B4B;
font-size: 0.75rem;
font-weight: 400;
`

export const Arrow = styled.div`
clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
background: #EFF3F8;
width: 0.9935rem;
height: 1.10713rem;
position: absolute;
top: -24%;
left: 4%;
`

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`