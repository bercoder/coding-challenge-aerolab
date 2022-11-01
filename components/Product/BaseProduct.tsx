import { useState, useEffect, useRef, FC } from "react";
import Image from "next/image";

import {
	StyledProduct,
	Preload,
} from "./styles";

import logono from "../../assets/icons/aerolab-logo-2.svg";
import { iProduct } from "../../types";

type Props = {
	product: iProduct;
	createDate?: string;
};

export const BaseProduct: FC<Props> = ({ product, createDate }) => {
	const [loaded, setLoaded] = useState<boolean>(false);

	const {
		name,
		category,
		cost,
		img: { url },
	} = product;

	const mounted = useRef<boolean>(false);

	useEffect(() => {
		mounted.current = true;

		return () => {
			mounted.current = false;
		}
	}, [])

	const format = (n: number) => new Intl.NumberFormat("es-AR").format(n);
	const date = (d: string) => new Date(d).toLocaleDateString();

	return (
		<div>
			<StyledProduct>
				<div className="image">
					<Image
						src={url}
						alt={name}
						width="280px"
						height="204px"
						layout="fixed"
						onLoadingComplete={() => {
							if (mounted.current) setLoaded(true)
						}}
						className={`product ${!loaded && "hidden"}`}
					/>
					<Preload className={`${loaded ? "hide" : ""}`}>
						<Image
							className="black"
							src={logono}
							alt={name}
							width="78px"
							height="72px"
							layout="fixed"
						/>{" "}
					</Preload>
				</div>
				<div className="detail">
					<p className="name">{name}</p>
					<p className="category">{category}</p>
					{!!createDate && <p className="datecost"><span>{date(createDate)}</span><span>{format(cost)} points</span></p>}
				</div>
			</StyledProduct>
		</div>
	);
};
