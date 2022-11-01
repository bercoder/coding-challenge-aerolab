import { FC, useState } from "react";
import { Button, flexStyle } from "../../styles";
import styled from "styled-components";
import { textGradient, gradientStyle, gradientHoverStyle } from '../../styles';

const Div = styled.div`
	${flexStyle};
	gap: 4px;
`;

const RadioButton = styled(Button)`
	background: ${(props) => props.theme.colors.brand.light};
	width: 100%;

	& span {
		${textGradient};
	}

	&:hover {
		background: ${(props) => props.theme.colors.brand.light2};
	}
	
	&.selected {
		${gradientStyle};
		
		& span {
			-webkit-text-fill-color: initial;
			color: ${(props) => props.theme.colors.neutrals['100']};
		}

		&:hover {
    	${gradientHoverStyle};
  }
	}
`;

type Props = {
	values: number[] | string[];
	selected?: number | string;
	select: (el: number | string) => void;
	padding?: string;
	title?: string;
};

export const Radio: FC<Props> = ({ values, selected, select, padding, title }) => {
	const [sel, setSel] = useState<string | number>(selected || values[0]);

	return (
		<>
			<Div className="radioContainer">
				{values.map((val) => (
					<RadioButton
						title={title?.replace('$', val.toString())}
						style={{
							padding: padding || "8px 16px"
						}}
						className={`radioType ${sel === val ? "selected" : ""}`}
						key={val}
						onClick={() => {
							setSel(val);
							select(val);
						}}
					>
						<span>{val}</span>
					</RadioButton>
				))}
			</Div>
		</>
	);
};
