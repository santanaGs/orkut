import styled from "styled-components";

import banner from '../../assets/images/banner.png'

export const BannerS = styled.div`
	width: 50rem;
	height: 37.375rem;
	flex-shrink: 0;
	border-radius: 1rem;
	opacity: 0.9;
	background: linear-gradient(195deg, rgba(20, 20, 20, 0.00) 7.46%, #141414 69.4%);

	@media screen and (max-width: 768px) {
		display: none;
	}
`

export const Image = styled.div`
	background-image: url(${banner});
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	width: 100%;
  height: 100%;
	position: relative;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

export const Text = styled.p`
	color: #FFF;
	font-size: 2rem;
	font-weight: 500;
	position: absolute;
	left: 3.5rem;
	bottom: 3.5rem;
	width: 38.5625rem;
	
`