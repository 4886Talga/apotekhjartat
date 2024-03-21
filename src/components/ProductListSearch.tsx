import { useProductItemsContext } from "../lib/hooks";
import ProductList from "./ProductList";

export default function ProductListSearch() {
  const { filteredProducts, isLoading } = useProductItemsContext();

  return (
    <ProductList filteredProducts={filteredProducts} isLoading={isLoading} />
  );
}
