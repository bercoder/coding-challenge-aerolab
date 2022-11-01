import React from 'react';
import { Skeleton } from '../Product/Skeleton';
import { iHistory } from '../../types';

import { StyledProducts, ListOfProducts, Title,PagerAndNum } from '../Products/styles';

type Props = {
  products: iHistory[];
  onPagination: React.ReactNode;
  onNumberOfProducts: React.ReactNode;
	children: (
		value: iHistory,
		index: number,
		array: iHistory[]
	) => React.ReactNode;
}

export const ListOfHistory: React.FC<Props> = ({ products, onPagination, onNumberOfProducts, children}) => {

  return (
    <StyledProducts id="products">
      <Title><span>Redeem</span> history</Title>
      <ListOfProducts style={{ rowGap: '24px'}}>
        { !!products.length 
        ? products.map(children)
        : <Skeleton />}
      </ListOfProducts>
      { !!products.length &&
        <PagerAndNum>
          {onPagination}
          {onNumberOfProducts}
        </PagerAndNum>
      }
    </StyledProducts>
  )
}
