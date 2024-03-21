import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import { useBookmarksContext } from "../lib/hooks";

type BokkmarkedIconProps = {
  id: string;
};

export default function BookmarkIcon({ id }: BokkmarkedIconProps) {
  const { bookmarkedIds, handleToogleBookmark } = useBookmarksContext();

  return (
    <button
      className="bookmark-btn"
      onClick={(e) => {
        handleToogleBookmark(id);
        e.stopPropagation;
        e.preventDefault;
      }}
    >
      <BookmarkFilledIcon
        className={`${bookmarkedIds.includes(id) ? "filled" : ""}`}
      />
    </button>
  );
}
