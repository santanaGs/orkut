import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	border-radius: 1rem;
	background: #FFF;
	padding: 1.5rem;
`

export const ListNameDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const ListName = styled.p`
	color: #4B4B4B;
	font-size: 0.75rem;
	font-weight: 600;
	line-height: 150%; /* 1.125rem */
`

export const ListMore = styled.a`
	text-decoration: none;
	color: #ED2590;
	font-size: 0.75rem;
	font-weight: 500;
	line-height: 150%; /* 1.125rem */
`

export const ListGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 2rem;
	margin-top: 2rem;
`