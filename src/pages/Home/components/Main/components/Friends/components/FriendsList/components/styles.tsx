import styled from "styled-components";

interface ImageProps {
	communities?: boolean
}


export const Friend = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
`

export const Image = styled.img<ImageProps>`
	width: 3.5rem;
	height: 3.5rem;
	border-radius:  ${props => props.communities ? '0.75rem' : '50%'};
`

export const Name = styled.p`
	color: #4B4B4B;
	text-align: center;
	font-family: Inter;
	font-size: 0.75rem;
	font-weight: 400;
	line-height: 1rem; /* 133.333% */
`