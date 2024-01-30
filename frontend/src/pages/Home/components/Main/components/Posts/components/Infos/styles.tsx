import styled from "styled-components";

interface LabelProps {
	more?: boolean;
}

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: .3rem;
`

export const Label = styled.p`
color: #B4AEAE;
font-size: 1rem;
font-weight: 400;
`

export const Data = styled.p<LabelProps>`
color: #4B4B4B;
font-size: 1rem;
font-weight: 400;
border: ${props => props.more ? '1px solid #ED2590' : '0px solid transparente'};
padding: ${props => props.more ? '.5rem 1rem' : '0'};
border-radius: 1.875rem;
`