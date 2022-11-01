import { useState, useEffect, useCallback } from 'react';
import { iHistory, iProduct } from '../types';

type PaginatedType = iHistory | iProduct;

export const usePagination = <PaginatedType> ( products: PaginatedType[])  => {

  const showPerPage = 16;

  const [page, setPage] = useState<number>(1);
  const [paginatedProducts, setPaginatedProducts] = useState<PaginatedType[]>([]);

  const totalPages: number = Math.ceil(products.length / showPerPage);

  const disabledPrev = page < 2;
  const disabledNext = page >= totalPages;
  
  useEffect(() => {
    if (!products.length) return;
		const from = showPerPage * (page - 1);
		setPaginatedProducts([...products].splice(from, showPerPage));
	}, [products, page, showPerPage]);

  function previous() {
    setPage(prev => Math.max(1, prev - 1));
  }

  function next() {
    setPage(prev => Math.min(totalPages, prev + 1));
  }

  const initial = useCallback(() => setPage(1), []);

  return {
    paginatedProducts,
    page,
    showPerPage,
    totalPages,
    totalProducts: products?.length ?? 0,
    disabledPrev,
    disabledNext,
    previous,
    next,
    initial
  }
}