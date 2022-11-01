import { FC, useState, useContext } from "react";
import Image from 'next/image';
import { CloseButton } from "../ui/CloseButton";
import { Radio } from "../ui/Radio";
import { iAmount, RejectError } from "../../types";
import { Icon24x20 } from '../../styles';

import { StyledAeroPayContent, Header, Body, Title, StyledButton } from './styles';

import { Card } from './Card';
import logo from '../../assets/icons/aeropay-3.svg';

import { UserContext } from '../../context/UserContext';
import { NotifyContext } from '../../context/NotifyContext';

type Props = {
	close: () => void;
};

export const AeroPayContent: FC<Props> = ({ close }) => {
	const [amount, setAmount] = useState<iAmount>(1000);
	const [buying, setBuying] = useState<boolean>(false);
	
	const { user, buyPoints } = useContext(UserContext);
	const { success, error } = useContext(NotifyContext);
		
	async function handleBuy(value: number) {
		try {
			setBuying(true);
			await buyPoints(+value);
			success(<>{value} points added.</>);
		} catch(err){
				err === RejectError.PROCESSING
					? error(<><strong>Error</strong> Wait until the current operation is finished</>)
					: error(<>Error adding points.</>);
		} finally {
			setBuying(false);
		}

		close();
	}

	return (
		<StyledAeroPayContent>
			<Header>
				<Title>Add Balance</Title>
				<CloseButton onClick={close} />
			</Header>
			<Body>
				<Card name={user?.name || ''} expiration="07/23" />
				<Radio
					values={[1000, 5000, 7500]}
					selected={amount}
					select={(val) => setAmount(val as iAmount)}
					padding="4px 16px"
					title="Select $ points"
				/>
				
				<StyledButton disabled={buying} title={`Add ${amount} points`} onClick={() => handleBuy(amount)}>
					<Icon24x20>
						<Image layout="fill" className="border-right" src={logo} alt="" />
					</Icon24x20>
					{buying ? <span>Processing...</span> : <span>Add Points</span>}
				</StyledButton>
				
			</Body>
		</StyledAeroPayContent>
	);
};
