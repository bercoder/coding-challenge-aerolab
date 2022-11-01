import styled from "styled-components";

import {
	Bordered,
	shadowStyle,
	l1DefaultStyle,
	l2AllCapsStyle,
	gradientHoverStyle,
} from "../../styles";
import { Button } from "../../styles";

export const ProductContainer = styled.article`
	&:hover .image > span {
		transform: scale(1.15);
	}
`;

export const StyledProduct = styled(Bordered)`
	height: 434px;
	flex-direction: column;
	${shadowStyle};
	border-radius: 16px;
	padding: 0;
	color: rgb(23, 111, 235);

	& .image {
		position: relative;
		height: 353px;
		width: 100%;
		display: grid;
		place-items: center;
		flex: 1;
		border-bottom: 1px solid ${(props) => props.theme.colors.border};
		overflow: hidden;

		& > span {
			transition: transform 0.7s ease 0.1s;
		}

		& .black {
			filter: grayscale(100%) opacity(15%);
		}

		& .product {
			transition: opacity 0.9s ease-out;
			transition-delay: 0.3s;
		}

		& .hidden {
			display: none;
			opacity: 0;
		}
	}

	& .detail {
		width: 100%;
		align-self: flex-start;
		padding: 16px 24px 24px 24px;

		& .datecost {
			width: 100%;
			font-size: .8em;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}

	& p {
		${l1DefaultStyle};
	}

	& .name {
		color: ${(props) => props.theme.colors.neutrals["900"]};
		vertical-align: top;
	}

	& .category {
		${l2AllCapsStyle};
	}

	& .datecost{
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-weight: 300;
		color: ${(props) => props.theme.colors.neutrals["400"]};
	}
`;

export const Text = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
`;

export const Redeem = styled(Button)`
	border-radius: 16px;
	margin: 16px auto 48px;
	padding: 16px 24px;
	width: 100%;
	${l1DefaultStyle};
	color: ${(props) => props.theme.colors.neutrals["0"]};
	${shadowStyle};

	&:hover {
		${gradientHoverStyle};
	}

	&:disabled {
		background: ${(props) => props.theme.colors.neutrals["200"]};
		color: ${(props) => props.theme.colors.neutrals["600"]};
		cursor: not-allowed;

		&:active {
			transform: scale(0.98);
		}
	}

	&.processing {
		background: linear-gradient(
			102.47deg,
			${(props) => `${props.theme.colors.brand.default.from}b2`} -5.34%,
			${(props) => `${props.theme.colors.brand.default.to}b2`} 106.58%
		);
		color: ${(props) => props.theme.colors.neutrals["0"]};
	}
`;

export const Preload = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	display: grid;
	place-items: center;
	transition: all 0.4s ease-in;
	z-index: -1;

	&.hide {
		opacity: 0;
		transform: scale(1.3);
	}
`;
