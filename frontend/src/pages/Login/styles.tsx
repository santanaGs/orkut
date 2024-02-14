import styled from "styled-components";

export const Background = styled.div`
	background: #D9E6F7;
	width: 100%;
	height: 100%;

	@media screen and (max-width: 768px) {
		height: 100vh;
	}

`

export const Container = styled.div`
		width: 1200px;
		margin: 0 auto;
		padding: 9rem 0rem;
		display: flex;
		justify-content: space-between;

		@media screen and (max-width: 768px) {
		width: 100%;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`