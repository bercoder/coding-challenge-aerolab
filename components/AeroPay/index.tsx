import { useState, useRef, FC, useContext } from "react";
import { DropDown } from "../DropDown";
import { AeroPayContent } from "./AeroPayContent";
import { CSSTransition } from "react-transition-group";

import styled from 'styled-components';
import { useClickOutside } from "../../hooks/useClickOutside";
import { UserContext } from '../../context/UserContext';

import { UserStatus } from "../../types";

const StyledAeroPay = styled.div`
	position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 7px;
	z-index: 10;

	&.disabled {
		opacity: .5
	}
`;

export const AeroPay: FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	
	const pointsRef = useRef<HTMLDivElement>(null);

	const { userStatus } = useContext(UserContext);

	function handleClose(){
		setOpen(false)
	}

	const enabled = userStatus === UserStatus.OK;

	function handleToggle() {
		if (enabled) {
			setOpen((prev) => !prev);
		}
	}

	useClickOutside(pointsRef, open, handleClose);

	return (
		<StyledAeroPay ref={pointsRef} className={`${enabled ? '' : 'disabled'}`}>
			<DropDown
				toggle={handleToggle}
				open={open}
			/>
			<CSSTransition
				in={open}
				timeout={300}
				classNames="card"
				unmountOnExit
				appear
			>
				<AeroPayContent close={() => setOpen(false)} />
			</CSSTransition>
		</StyledAeroPay>
	);
};
