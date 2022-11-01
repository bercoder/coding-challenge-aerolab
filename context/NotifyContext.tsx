import { createContext, useState, FC } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Notification } from "../components/Notification";
import { NotificationsContainer } from '../components/Notification/NotificationsContainer';

type tMessage = {
	id: number;
	show: boolean;
	message: null | JSX.Element;
	type: "error" | "success";
};

type Context = {
	success: (message: tMessage["message"]) => void;
	error: (message: tMessage["message"]) => void;
};

export const NotifyContext = createContext({} as Context);

export const NotifyProvider: FC = ({ children }: { children?: any }) => {

	const [notifications, setNotifications] = useState<tMessage[]>([]);

	function closeMessage(id: number) {
		setNotifications((prev) => prev.filter((el) => el.id !== id));
	}

	function success(message: tMessage["message"]) {
		setNotifications(prev => [
			...prev,
			{
				id: Date.now() + Math.random() * 500,
				show: true,
				message,
				type: "success",
			},
		]);
	}

	function error(message: tMessage["message"]) {
		setNotifications(prev => [
			...prev,
			{
				id: Date.now() + Math.random() * 500,
				show: true,
				message,
				type: "error",
			},
		]);
	}

	return (
		<NotifyContext.Provider
			value={{
				success,
				error,
			}}
		>
			{children}
			<TransitionGroup>
			<NotificationsContainer>
				{notifications?.map(({ id, show, type, message }) => (
					<CSSTransition
						key={id}
						in={show}
						timeout={500}
						classNames="modal"
						unmountOnExit
					>
						<Notification
							show={show}
							onClose={() => closeMessage(id)}
							type={type}
						>
							{message}
						</Notification>
					</CSSTransition>
				))}
				</NotificationsContainer>
			</TransitionGroup>

		</NotifyContext.Provider>
	);
};
