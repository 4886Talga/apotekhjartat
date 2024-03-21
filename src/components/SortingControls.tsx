import { useProductItemsContext } from "../lib/hooks";

export default function SortingCotrol() {
  const { sortBy, handleChangeSortBy } = useProductItemsContext();
  return (
    <section className="sorting">
      <i className="fa-solid fa-arrow-down-short-wide"></i>
      <SortingButton
        onClick={() => handleChangeSortBy("price")}
        isActive={sortBy === "price"}
      >
        Price
      </SortingButton>
      <SortingButton
        onClick={() => handleChangeSortBy("raiting")}
        isActive={sortBy === "raiting"}
      >
        Raiting
      </SortingButton>
    </section>
  );
}

type SortingButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function SortingButton({ children, onClick, isActive }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`sorting__button sorting__button--rating ${
        isActive ? "sorting__button--active" : ""
      }`}
    >
      {children}
    </button>
  );
}
