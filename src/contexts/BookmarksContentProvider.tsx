import React, { createContext } from "react";
import { useLocalStorage, useProductItems } from "../lib/hooks";
import { ProductItemExpended } from "../lib/types";

type BookmarkasContext = {
  bookmarkedIds: string[];
  handleToogleBookmark: (id: string) => void;
  bookmarkedProductItems: ProductItemExpended[];
  isLoading: boolean;
};

export const BookmarksContext = createContext<BookmarkasContext | null>(null);

export default function BookmarksContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [bookmarkedIds, setBokmarkedIds] = useLocalStorage<string[]>(
    "bookmarkedIds",
    []
  );

  const { productItems: bookmarkedProductItems, isLoading } =
    useProductItems(bookmarkedIds);

  const handleToogleBookmark = (id: string) => {
    if (bookmarkedIds.includes(id)) {
      setBokmarkedIds((prev) => prev.filter((item) => item != id));
    } else {
      setBokmarkedIds((prev) => [...prev, id]);
    }
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarkedIds,
        handleToogleBookmark,
        bookmarkedProductItems,
        isLoading,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
}
