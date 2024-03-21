import React, { createContext, useCallback, useMemo, useState } from "react";
import { useSearchQuery, useSearchTextContext } from "../lib/hooks";
import { ProductItemExpended, SortBy } from "../lib/types";

type ProductItemsContext = {
  filteredProducts: ProductItemExpended[];
  isLoading: boolean;
  currentPage: number;
  finalPage: number;
  nextPage: number;
  prevPage: number;
  count: number;
  sortBy: string;
  productItemsSorted: ProductItemExpended[];
  handleChangeSortBy: (newSortBy: SortBy) => void;
  setPage: (page: number) => void;
};

export const ProductItemsContext = createContext<ProductItemsContext | null>(
  null
);

export default function ProductItemsContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // dependencies on the other contexts
  const { debouncedSearchText } = useSearchTextContext();

  // state
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState<SortBy>("price");

  const { filteredProducts, isLoading, pagesData } = useSearchQuery(
    debouncedSearchText,
    page
  );
  const { currentPage, finalPage, nextPage, prevPage, count } = pagesData;

  const productItemsSorted = useMemo(
    () =>
      filteredProducts.sort?.((a, b) => {
        if (sortBy === "price") {
          return b.price - a.price;
        } else {
          return b.averageRating - a.averageRating;
        }
      }),
    [sortBy, filteredProducts]
  );

  const handleChangeSortBy = useCallback((newSortBy: SortBy) => {
    setPage(1);
    setSortBy(newSortBy);
  }, []);

  const contextValue = useMemo(
    () => ({
      sortBy,
      filteredProducts,
      isLoading,
      currentPage,
      finalPage,
      nextPage,
      prevPage,
      count,
      productItemsSorted,
      handleChangeSortBy,
      setPage,
    }),
    [
      sortBy,
      filteredProducts,
      isLoading,
      currentPage,
      finalPage,
      nextPage,
      prevPage,
      count,
      productItemsSorted,
      handleChangeSortBy,
      setPage,
    ]
  );

  return (
    <ProductItemsContext.Provider value={contextValue}>
      {children}
    </ProductItemsContext.Provider>
  );
}
