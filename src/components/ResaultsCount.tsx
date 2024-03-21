import { useProductItemsContext } from "../lib/hooks";

export default function ResultsCount() {
  const { count: totalNumberOfResults } = useProductItemsContext();
  return (
    <p className="count">
      <span className="u-bold">{totalNumberOfResults}</span> products
    </p>
  );
}
