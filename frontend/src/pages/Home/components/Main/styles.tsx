import styled from "styled-components";

export const Background = styled.div`
background: #D9E6F7;
height: 100%;
padding-block: 4.75rem;
`

export const Container = styled.div`
	width: 1200px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;

		@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
	}
`