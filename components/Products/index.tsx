import React from "react";
import { Skeleton } from "../Product/Skeleton";
import { iProduct } from "../../types";

import {
	StyledProducts,
	ListOfProducts,
	Title,
	Controls,
	Pager,
	PagerAndNum,
} from "./styles";

type Props = {
	products: iProduct[];
	onFilter: React.ReactNode;
	onSort: React.ReactNode;
	onPagination: React.ReactNode;
	onNumberOfProducts: React.ReactNode;
	children: (
		value: iProduct,
		index: number,
		array: iProduct[]
	) => React.ReactNode;
};

export const Products: React.FC<Props> = ({
	products,
	onFilter,
	onSort,
	onPagination,
	onNumberOfProducts,
	children,
}) => {
	return (
		<StyledProducts id="products">
			<Title>
				<span>Tech</span> products
			</Title>
			{!!products.length && (
				<Controls>
					{onFilter}
					<Pager>{onPagination}</Pager>
					{onSort}
				</Controls>
			)}
			<ListOfProducts>
				{!!products.length ? products.map(children) : <Skeleton />}
			</ListOfProducts>
			{!!products.length && (
				<PagerAndNum>
					{onPagination}
					{onNumberOfProducts}
				</PagerAndNum>
			)}
		</StyledProducts>
	);
};
