import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { PageDirection } from "../lib/types";
import { useProductItemsContext } from "../lib/hooks";

export default function PaginationControls() {
  const {
    currentPage,
    nextPage,
    prevPage,
    setPage,
    count: totalNumberPages,
  } = useProductItemsContext();

  return (
    <section className="pagination">
      {currentPage > 1 && (
        <PaginationButton
          direction="previous"
          prevPage={prevPage}
          nextPage={nextPage}
          setPage={() => setPage(prevPage)}
        />
      )}
      {currentPage < totalNumberPages && (
        <PaginationButton
          direction="next"
          nextPage={nextPage}
          prevPage={prevPage}
          setPage={() => setPage(nextPage)}
        />
      )}
    </section>
  );
}

type PaginationButtonProps = {
  direction: PageDirection;
  nextPage: number;
  prevPage: number;
  setPage: () => void;
};
function PaginationButton({
  direction,
  nextPage,
  prevPage,
  setPage,
}: PaginationButtonProps) {
  return (
    <button
      onClick={setPage}
      className={`pagination__button pagination__button--${direction}`}
    >
      {direction === "previous" && (
        <>
          <ArrowLeftIcon /> Page {prevPage}
        </>
      )}
      {direction === "next" && (
        <>
          {nextPage} Page <ArrowRightIcon />
        </>
      )}
    </button>
  );
}
