import { FC } from 'react';
import styled from "styled-components";

const StyledNotifications = styled.div`
	width: 360px;
  display: flex;
  flex-direction: column-reverse;
  gap: 5px;
	position: fixed;
	bottom: 50px;
	right: 20px;
	padding: 0;
	background: transparent;
	z-index: 90;

	@media (min-width: ${(props) => props.theme.sizes.desktop}) {
		width: 532px;
		left: 80px;
		bottom: 20px;
	}
`;

type Props = {
	children: React.ReactNode;
}

export const NotificationsContainer: FC<Props> = ({ children }) => (
<StyledNotifications>
  {children}
</StyledNotifications>)