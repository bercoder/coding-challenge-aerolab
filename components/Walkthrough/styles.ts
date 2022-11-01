import styled from "styled-components";

import {
	flexStyle,
	H3,
	textGradient,
	l1DefaultStyle,
} from "../../styles";

export const StyledWalkthrough = styled.section`
	background: linear-gradient(
		102.47deg,
		rgba(23, 111, 235, 0.5) -5.34%,
		rgba(255, 128, 255, 0.5) 106.58%
	);
	position: relative;
	padding: 412px 20px 32px 20px;
	margin: 0 auto 80px;

	& .background {
		min-width: 375px;
		position: absolute;
		width: 540px;
		height: 540px;
		left: 50%;
		transform: translateX(-50%);
		top: -55px;

		& img {
			transform: translateY(-65px);
		}
	}

	@media (min-width: ${(props) => props.theme.sizes.tablet}) {
		padding-top: 0;
		height: 656px;
		margin: 230px 0 225px;

		& .background {
			top: -317px;
		}
	}

	@media (min-width: ${(props) => props.theme.sizes.desktop}) {
		height: 528px;

		& .background {
			display: none;
		}
	}
`;

export const Cards = styled.div`
	width: 335px;
	margin: 0 auto 24px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	@media (max-width: ${(props) => props.theme.sizes.tablet}) {
		&:hover > article {
			opacity: 0.7;
		}
	}

	@media (min-width: ${(props) => props.theme.sizes.tablet}) {
		width: 100%;
		padding: 149px 20px 0;
		flex-direction: row;
		justify-content: center;
		margin-bottom: 0;
		row-gap: 0;
	}

	@media (min-width: ${(props) => props.theme.sizes.desktop}) {
		gap: 0;
		padding: 0 20px;
		position: relative;
		top: -127px;
	} ;
`;

export const Card = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	background: rgba(255, 255, 255, 0.7);
	border: 1px solid #dae4f2;
	box-shadow: 0px 2px 40px rgba(0, 0, 0, 0.05);
	border-radius: 32px;
	padding: 12px;

	& .image {
		background: linear-gradient(
			102.47deg,
			#7296eb -5.34%,
			#eac0e9 106.58%,
			#eac0e9 106.58%
		);
		border-radius: 24px 24px 0px 0px;
		width: 311px;
		height: 230px;
		position: relative;
	}

	& .body {
		background: #ffffff;
		border: 1px solid ${(props) => props.theme.colors.border};
		border-radius: 0px 0px 24px 24px;
		padding: 16px 24px 24px;
		flex: 1;
	}

	@media (min-width: ${(props) => props.theme.sizes.tablet}) {
		width: 323px;

		& .image {
			width: 299px;
			height: 290px;
		}
	}

	@media (min-width: ${(props) => props.theme.sizes.desktop}) {
		background-color: ${(props) => props.theme.colors.neutrals["0"]};
		width: 532px;

		& .image {
			width: 508px;
			height: 498px;
		}

		&:nth-of-type(1) {
			transform: rotate(-3deg);
			position: relative;
			left: 50px;
			top: 35px;
		}

		&:nth-of-type(3) {
			transform: rotate(3deg);
			position: relative;
			left: -50px;
			top: 35px;
		}

		& .body {
			padding-right: 160px;
		}
	} ;
`;

export const Title = styled.div`
	${flexStyle};
	justify-content: flex-start;
	gap: 16px;
	margin-bottom: 20px;

	& .icon {
		width: 40px;
		height: 40px;
		border-radius: 8px;
		display: grid;
		place-items: center;
		background: ${(props) => props.theme.colors.brand.light};

		& .mobile {
			display: initial !important;
			@media (min-width: ${(props) => props.theme.sizes.desktop}) {
				display: none !important;
			}
		}

		& .desktop {
			display: none !important;
			@media (min-width: ${(props) => props.theme.sizes.desktop}) {
				display: initial !important;
			}
		}
	}
`;

export const TitleName = styled(H3)`
	${textGradient};
`;

export const Text = styled.p`
	${l1DefaultStyle};
`;
