import { useproductItemsContext } from "../lib/hooks";
import productList from "./ProductList";

export default function productListSearch() {
  const { productItemsSortedAndSliced, isLoading } = useproductItemsContext();

  return (
    <productList
      productItems={productItemsSortedAndSliced}
      isLoading={isLoading}
    />
  );
}
