import Head from "next/head";
import type { NextPage } from "next";
import { iHistory } from "../types";

import { Header } from "../components/Header";

import { ListOfHistory } from "../components/History/ListOfHistory";
import { HistoryProduct } from "../components/Product/historyProduct";

import { Pagination } from "../components/ui/Pagination";
import { NumberOfProducts } from "../components/ui/NumberOfProducts";

import { Footer } from "../components/Footer";

import styled from "styled-components";
import { usePagination } from "../hooks/usePagination";
import { useContext, useMemo } from "react";
import { UserContext } from "../context/UserContext";

const Container = styled.div`
	min-width: 375px;
	margin: 0 auto;

	& main {
		overflow-x: hidden;
	}
`;

type Props = {
	listOfProducts: iHistory[];
};

const Home: NextPage<Props> = () => {

	const { user: { redeemHistory } } = useContext(UserContext);

	const products = useMemo(() => {
		return !!redeemHistory ? [...redeemHistory].reverse() : []
	}, [redeemHistory])

	const { paginatedProducts, ...pageInfo } = usePagination<iHistory>(products || []);

	return (
		<div>
			<Head>
				<title>Aerolab coding challenge | Redeem history</title>
				<meta
					name="description"
					content="Redeem history of Aerolab coding challenge"
				/>
			</Head>

			<Container>
				<main>
					<Header />
					<ListOfHistory
						products={paginatedProducts}
						onPagination={<Pagination {...pageInfo} />}
						onNumberOfProducts={
							<NumberOfProducts
								page={pageInfo.page}
								showPerPage={pageInfo.showPerPage}
								totalProducts={pageInfo.totalProducts}
							/>
						}
					>
						{(prod: iHistory) => (
							<HistoryProduct product={prod} key={prod.createDate} />
						)}
					</ListOfHistory>
					<Footer />
				</main>
			</Container>
		</div>
	);
};

export default Home;