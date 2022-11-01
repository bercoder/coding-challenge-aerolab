import styled from "styled-components";
import { Flex, shadowStyle, l1DefaultStyle } from "../../styles";

export const StyledNotification = styled(Flex)`
	border: 2px solid
		${(props) =>
			props.color === "error"
				? props.theme.colors.red.default
				: props.theme.colors.green.default};
	border-radius: 12px;
	padding: 24px;
	background: white;
	${shadowStyle}

	& p {
		${l1DefaultStyle};
		width: 209px;
		margin-left: 12px;
	}

	& strong {
		color: ${(props) => props.theme.colors.neutrals['900']};
	}

	@media (min-width: ${(props) => props.theme.sizes.desktop}) {
		& p {
			width: 100%;
		}

		& strong {
			display: initial;
		}
	}
`;
