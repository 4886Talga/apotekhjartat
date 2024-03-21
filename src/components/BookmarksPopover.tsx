import { createPortal } from "react-dom";
import { useBookmarksContext } from "../lib/hooks";
import ProductList from "./ProductList";
import { forwardRef } from "react";

const BookmarksPopover = forwardRef<HTMLDivElement>(function (_, ref) {
  const { bookmarkedProductItems } = useBookmarksContext();

  return createPortal(
    <div ref={ref} className="bookmarks-popover">
      <ProductList
        filteredProducts={bookmarkedProductItems}
        isLoading={false}
      ></ProductList>
    </div>,
    document.body
  );
});

export default BookmarksPopover;
