import { FC } from 'react';
import styled from 'styled-components';
import { l1DefaultStyle, textGradient } from '../../styles';

const Showing = styled.div`
  margin: 8px auto 0 auto;
	text-align: center;
`;

const Text = styled.p`
	${l1DefaultStyle};

	& span {
		${textGradient}
	}
`;

type Props = {
	page: number;
	totalProducts: number;
	showPerPage: number;
};

export const NumberOfProducts: FC<Props> = ({ showPerPage, page, totalProducts }) => {
  return (
    <Showing className="numberOfProducts">
    <Text>
        <span>{`${Math.min(showPerPage * page, totalProducts)} of ${totalProducts} `}</span>
        products
    </Text>
  </Showing>
  )
}