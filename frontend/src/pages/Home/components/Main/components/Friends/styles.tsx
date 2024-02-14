import styled from "styled-components";

export const Container = styled.div`
	width: 17.5rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;

		@media screen and (max-width: 768px) {
		width: 100%;
		margin: 0 auto;
		margin-top: 2rem;
	}
`