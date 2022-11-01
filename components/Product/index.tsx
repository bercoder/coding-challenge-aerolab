import Image from "next/image";
import { useState, FC, useRef, useContext } from "react";

import { Icon24x20 } from "../../styles";
import { 	ProductContainer, Text, Redeem } from "./styles";

import { BaseProduct } from './BaseProduct';

import logo from "../../assets/icons/aeropay-3.svg";
import { DisabledIcon } from "./DisabledIcon";
import { iProduct, RejectError } from "../../types";
import { UserContext } from "../../context/UserContext";
import { NotifyContext } from "../../context/NotifyContext";

type Props = {
	product: iProduct;
};

export const Product: FC<Props> = ({ product }) => {
	const [processing, setProcessing] = useState<boolean>(false);

	const { user: { _id, points: _points }, redeemProduct } = useContext(UserContext);
	const { success, error } = useContext(NotifyContext);

	const { cost } = product;

	const points = Boolean(_id) ? _points : 0;

	const DISABLED = cost > points;

	const title = processing
		? "Wait"
		: DISABLED
		? "You doesn't have enough points for this product"
		: "Redeem now";

	const ref = useRef<HTMLDivElement>(null);

	function handleRedeem() {
		if (DISABLED) return;

		setProcessing(true);
		handleAnimation(true);

		redeemProduct(product._id, product.cost)
			.then(() => {
				success(
					<>
						<strong>{product.name}</strong> redeemed succesfully
					</>
				);
			})
			.catch((err) => {
				 err === RejectError.PROCESSING
					? error(<><strong>Error</strong> Wait until the current operation is finished</>)
					: error(<><strong>{product.name}</strong> Operation couldn&apos;t be completed</>)
				})
			.finally(() => setProcessing(false));
	}

	function handleAnimation(add: boolean = true) {
		if (ref && ref.current) {
			if (add) ref.current.classList.add("redeem");
			else ref.current.classList.remove("redeem");
		}
	}

	const format = (n: number) => new Intl.NumberFormat("es-AR").format(n);

	return (
		<ProductContainer>
			
			<BaseProduct product={product}/>

			<Redeem
				title={title}
				className={processing ? "processing" : ""}
				disabled={DISABLED}
				onClick={handleRedeem}
			>
				{processing ? (
					<Text>Processing...</Text>
				) : DISABLED ? (
					<Text>
						You need <DisabledIcon /> {format(cost - points)}
					</Text>
				) : (
					<Text onAnimationEnd={() => handleAnimation()} ref={ref}>
						Redeem for{" "}
						<Icon24x20>
							<Image layout="fill" src={logo} alt="" />
						</Icon24x20>
						{format(cost)}
					</Text>
				)}
			</Redeem>
		</ProductContainer>
	);
};
