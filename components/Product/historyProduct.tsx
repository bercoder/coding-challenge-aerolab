import { FC } from "react";

import { 	ProductContainer } from "./styles";
import { BaseProduct } from './BaseProduct';
import { iHistory } from "../../types";

type Props = {
	product: iHistory;
};

export const HistoryProduct: FC<Props> = ({ product }) => {

	return (
		<ProductContainer>
			<BaseProduct createDate={product.createDate} product={product}/>
		</ProductContainer>
	);
};
