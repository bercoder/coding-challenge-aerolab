import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import type { iProduct } from "../types";
import { useState, useEffect, useCallback } from "react";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Products } from "../components/Products";
import { Product } from "../components/Product";
import { FilterByCategory } from "../components/ui/Filter";
import { Sort } from "../components/ui/Sort";
import { Pagination } from "../components/ui/Pagination";
import { NumberOfProducts } from "../components/ui/NumberOfProducts";
import { Walkthrough } from "../components/Walkthrough";
import { Footer } from "../components/Footer";

import styled from "styled-components";
import { usePagination } from "../hooks/usePagination";

const Container = styled.div`
	min-width: 375px;
	margin: 0 auto;

	& main {
		overflow-x: hidden;
	}
`;

type tFilter = {
	sort: null | string;
	category: null | string;
};

type Props = {
	listOfProducts: iProduct[];
};

const Home: NextPage<Props> = ({ listOfProducts }) => {
	const listOfCategories = !!listOfProducts.length
		? Array.from(
				new Set(
					["All Products"].concat(listOfProducts?.map((el) => el.category))
				)
		  )
		: [];

	const [listOfSortOptions] = useState<string[]>([
		"Most Recent",
		"Lowest Price",
		"Highest Price",
	]);

	const [products, setProducts] = useState<iProduct[]>(
		!!listOfProducts.length ? [...listOfProducts] : []
	);

	const { paginatedProducts, initial, ...pageInfo } = usePagination(products);

	const [filters, setFilters] = useState<tFilter>({
		sort: null,
		category: null,
	});

	const filterByCategory = useCallback(
		() => listOfProducts.filter((item) => item.category === filters.category),
		[listOfProducts, filters]
	);

	const sortByPrice = (items: iProduct[]) => {
		const sorted = [...items].sort((a, b) => {
			if (a.cost < b.cost) {
				return -1;
			}
			if (a.cost > b.cost) {
				return 1;
			}
			return 0;
		});

		return sorted;
	};

	useEffect(() => {
		if (!listOfProducts.length) return;

		let filtered = filters.category ? filterByCategory() : [...listOfProducts];

		if (filters.sort && filters.sort !== listOfSortOptions[0]) {
			const sorted = sortByPrice(filtered);

			filtered =
				filters.sort === listOfSortOptions[1]
					? (filtered = [...sorted])
					: (filtered = [...sorted].reverse());
		}

		setProducts([...filtered]);
		initial();
	}, [listOfProducts, filters, listOfSortOptions, filterByCategory, initial]);

	function filterCategories(selected: string) {
		if (selected === filters.category) return;

		if (selected === "All Products") {
			setFilters({
				...filters,
				category: null,
			});
			return;
		}

		setFilters({
			...filters,
			category: selected,
		});
	}

	function handleSort(selected: number | string) {
		if (selected === filters.sort) return;

		setFilters({
			...filters,
			sort: selected.toString(),
		});
	}

	return (
		<div>
			<Head>
				<title>Aerolab coding challenge</title>
				<meta
					name="description"
					content="Aerolab Frontend Developer coding challenge"
				/>
			</Head>

			<Container>
				<main>
					<Header />
					<Hero />
					<Walkthrough />
					<Products
						products={paginatedProducts}
						onFilter={
							<FilterByCategory
								list={listOfCategories}
								select={filterCategories}
								selected={filters.category}
							/>
						}
						onPagination={<Pagination {...pageInfo} />}
						onNumberOfProducts={
							<NumberOfProducts
								page={pageInfo.page}
								showPerPage={pageInfo.showPerPage}
								totalProducts={pageInfo.totalProducts}
							/>
						}
						onSort={<Sort options={listOfSortOptions} select={handleSort} />}
					>
						{(prod: iProduct) => <Product product={prod} key={prod._id} />}
					</Products>
					<Footer />
				</main>
			</Container>
		</div>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const options = {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${process.env.SECRET_TOKEN}`,
		},
	};

	try {
		const list = await fetch(`${process.env.URL}/products`, options);
		const listOfProducts = await list.json();

		return {
			props: {
				listOfProducts,
			},
		};
	} catch {
		return {
			notFound: true,
		};
	}
};

export default Home;
