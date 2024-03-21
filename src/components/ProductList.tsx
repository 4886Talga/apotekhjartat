import ProductListItem from "./ProductListItem";
import Spinner from "./Spinner";
import { ProductItemExpended } from "../lib/types";
import { useActiveIdContext } from "../lib/hooks";

type ProductListProps = {
  filteredProducts: ProductItemExpended[];
  isLoading: boolean;
};

export function ProductList({ filteredProducts, isLoading }: ProductListProps) {
  const { activeId } = useActiveIdContext();

  return (
    <ul className="product-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        filteredProducts.map((product) => (
          <ProductListItem
            product={product}
            key={product.id}
            isActive={product.id === activeId}
          />
        ))}
    </ul>
  );
}

export default ProductList;
