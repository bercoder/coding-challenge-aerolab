import { FC, useEffect } from "react";
import Image from "next/image";
import { CloseButton } from "../ui/CloseButton";
import { Icon24x20 } from "../../styles";
import errorIcon from "../../assets/icons/system-error.svg";
import successIcon from "../../assets/icons/system-success.svg";

import { StyledNotification } from './styles';

type Props = {
	show: boolean;
	type: "success" | "error";
	onClose: VoidFunction;
	children: React.ReactNode;
};

export const Notification: FC<Props> = ({ show, type, onClose, children }) => {
	useEffect(() => {
		if (!show) return;

		const timer = setTimeout(() => onClose(), 3000);

		return () => {
			clearTimeout(timer);
		};
	}, [show, onClose]);

	return (
		<StyledNotification color={type}>
			<Icon24x20>
				<Image layout="fill" src={type === "error" ? errorIcon : successIcon} alt={type} />
			</Icon24x20>
			<p>{children}</p>
			<CloseButton onClick={onClose} />
		</StyledNotification>
	);
};
