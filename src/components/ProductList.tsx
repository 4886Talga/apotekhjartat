import ProductListItem from "./ProductListItem";
import Spinner from "./Spinner";
import { Prescription } from "../lib/types";
import { useActiveId } from "../lib/hooks";

type ProductListProps = {
  filteredPrescriptions: Prescription[];
  isLoading: boolean;
};

export function ProductList({
  filteredPrescriptions,
  isLoading,
}: ProductListProps) {
  const activeId = useActiveId();

  return (
    <ul className="product-list">
      {isLoading && <Spinner />}
      {!isLoading &&
        filteredPrescriptions.map((prescription) => (
          <ProductListItem
            prescription={prescription}
            key={prescription.prescriptionId}
            isActive={prescription.prescriptionId === activeId}
          />
        ))}
    </ul>
  );
}

export default ProductList;
