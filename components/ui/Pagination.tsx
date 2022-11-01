import { FC } from "react";
import Image from 'next/image';
import { scroll } from "../../utils";
import { Icon24x20, l1DefaultStyle, textGradient } from '../../styles';
import styled from 'styled-components';
import arrow from '../../assets/icons/chevron-active.svg';

const Pager = styled.div`
	display: flex;
	align-items: center;
	width: max-content;
	margin: 16px auto 24px;
	gap: 24px;
	border: 1px solid ${props => props.theme.colors.border};
	padding: 12px 16px;
	border-radius: 16px;

	@media (min-width: ${props => props.theme.sizes.desktop}) {
		margin: 0;
	}
`;

const Button = styled.button`
	background-color: ${(props) => props.theme.colors.brand.light};
	width: 40px;
	height: 40px;
	border-radius: 8px;

	&:disabled {
		background-color: ${(props) => props.theme.colors.neutrals['200']};
		cursor: not-allowed;
		
		& img{
			opacity: .2;
		}
	}

	&:hover {
		background-color: ${(props) => props.theme.colors.brand.light2};
	}

	& .prev {
		transform: rotate(180deg);
	}
`;

const Text = styled.p`
	${l1DefaultStyle};

	& span {
		${textGradient}
	}
`;

type Props = {
	page: number;
	totalPages: number;
	disabledPrev: boolean;
	disabledNext: boolean;
	previous: VoidFunction;
	next: VoidFunction;
};

export const Pagination: FC<Props> = ({
	page,
	totalPages,
	disabledPrev,
	disabledNext,
	previous,
	next
}) => {

	function handlePrev() {
		previous();
		scroll();
	}

	function handleNext() {
		next();
		scroll();
	}

	return (
    <>
		<Pager className="pager">
			<Button
				disabled={disabledPrev}
				onClick={handlePrev}
				title={`${disabledPrev ? '' : `Go to page ${page - 1}`}`}
			>
				<Icon24x20>
					<Image className="prev" layout="fill" src={arrow} alt="<" />
				</Icon24x20>
			</Button>
			<Text>Page <span>{`${page} of ${totalPages}`}</span></Text>
			<Button
				disabled={disabledNext}
				onClick={handleNext}
				title={`${disabledNext ? '' : `Go to page ${page + 1}`}`}
			>
				<Icon24x20>
					<Image className="next" layout="fill" src={arrow} alt=">" />
				</Icon24x20>
			</Button>
		</Pager>
    </>
	);
};
