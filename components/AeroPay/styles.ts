import styled from 'styled-components';

import { l2DefaultStyle, Flex, l1DefaultStyle, shadowStyle, gradientHoverStyle, Button } from '../../styles';

export const StyledCard = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;  
background-color: ${props => props.theme.colors.neutrals['900']};
width: 264px;
height: 148px;
border-radius: 8px;
padding: 16px;
margin: 0 auto 40px;
position: relative;
overflow: hidden;
${shadowStyle};

&::before {
  content: "";
  transform: rotate(-4.26deg);
  width: 270px;
  height: 148px;
  position: absolute;
  top: 60px;
  left: 0;
  opacity: .4;
  background-color: ${props => props.theme.colors.neutrals['900']};
  background-image: url('./images/single-wave-pattern.svg');
  background-size: 80%;
  background-blend-mode: soft-light;
} 
`;

export const CardTitle = styled.p`
${l1DefaultStyle};
color: ${props => props.theme.colors.neutrals['100']};
`;

export const Data = styled.p`
${l2DefaultStyle};
z-index: 1;
color: ${props => props.theme.colors.neutrals['100']};
`;

export const StyledAeroPayContent = styled.div`
	width: 312px;
	position: absolute;
	background-color: white;
	top: 58px;
	border-radius: 16px;
	border: 1px solid ${props => props.theme.colors.border};
	z-index: 10;
	${shadowStyle};
`;

export const Header = styled(Flex)`
	border-bottom: 1px solid ${props => props.theme.colors.border};
	padding: 16px 24px;
`;

export const Body = styled.div`
	padding: 24px;
`;

export const Title = styled.p`
	${l1DefaultStyle};
	color: ${(props) => props.theme.colors.neutrals['900']};
`;

export const StyledButton = styled(Button)`
	padding: 12px 16px;
	margin-top: 24px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
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

`