import { useState, useEffect, useContext } from "react";
import { ProductItemExpended, ProductItemsAPIResponse, ReceivedProduct, ReceivedProducts } from "./types";
import { BASE_API_URL, RESULTS_PER_PAGE } from "./constants";
import { useQuery } from "react-query";
import { handleError } from "./utils";
import { BookmarksContext } from "../contexts/BookmarksContentProvider";
import { ActiveIdContext } from "../contexts/ActiveIdContextProvider";
import { SearchTextContext } from "../contexts/SearchTextContextProvider";
import { ProductItemsContext } from "../contexts/ProductItemsContextProvider";

const fetchProductItem =  async (id:string): Promise<ReceivedProduct> => {
  const response = await fetch(`${BASE_API_URL}/${id}`)
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description)
  }
  const data = await response.json();
  return data;
}

const fetchMultiProductItems =  async (ids:string): Promise<ReceivedProducts> => {
  const response = await fetch(`${BASE_API_URL}/multi/${ids}`)
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description)
  }
  const data = await response.json();
  return data;
  console.log(data)
}

// -----------------------------------------------------------------

export function useProductItem(id: string | null) {
 
    const { data, isLoading } = useQuery(['product-item', id], () => (id ? fetchProductItem(id) : null), 
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(id),
      onError:handleError,
    });
  
    return {fetchedProduct: data?.fetchedProduct, isLoading} as const   
}

export function useProductItems(ids: string[]) {
  const concatIds = ids.join(',')
 
  const { data, isLoading } = useQuery(['product-items', concatIds], () => (concatIds ? fetchMultiProductItems(concatIds) : null), 
  {
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: Boolean(ids),
    onError:handleError,
  });

  const productItems = data?.products.filter((product) => Boolean(product)) as ProductItemExpended[];
 
  return {productItems, isLoading} as const  

}

// -----------------------------------------------------------------


const fetchProductItems = async (searchText: string , page:number): Promise<ProductItemsAPIResponse> => {
  
  const response = await fetch(`${BASE_API_URL}?items=${RESULTS_PER_PAGE}&currentPage=${page}&search=${searchText}`);
  if(!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.description)
  }
  
  const data = await response.json();
  
  return data;
}

export function useSearchQuery(searchText: string, page:number) {
  const { data, isLoading } = useQuery(['product-items', searchText], () => fetchProductItems(searchText, page), 
    {
      staleTime: 1000 * 60 * 60,
      refetchOnWindowFocus: false,
      retry: false,
      enabled: Boolean(searchText),
      onError: handleError,
    });

 const pagesData = { count:data?.count || 0, finalPage:data?.finalPage || 0, nextPage:data?.nextPage || 0, prevPage:data?.prevPage || 0,currentPage:data?.currentPage || 0}

return {filteredProducts: data?.filteredProducts || [], isLoading, pagesData} as const 
}



export function useDebounce<T>(value:T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debouncedValue;
}

export function useActiveId() {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    const handleHashChange = () => {
      const id = window.location.hash.slice(1);
      setActiveId(id);
    };
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return activeId;
}

export function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key) || JSON.stringify(initialValue))
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue] as const;
}

export function useBookmarksContext() {
  const context = useContext(BookmarksContext);
  if (!context) {
    throw new Error(
      "useContext(BookmarksContext) must be used within a BookmarksContextProvider"
    );
  }
  return context;
}

export function useActiveIdContext() {
  const context = useContext(ActiveIdContext);
  if (!context) {
    throw new Error(
      "useActiveIdContext must be used within a ActiveIdContextProvider"
    );
  }
  return context;
}

export function useProductItemsContext() {
  const context = useContext(ProductItemsContext);
  if (!context) {
    throw new Error(
      "useProductItemsContext must be used within a ProductItemsContextProvider"
    );
  }
  return context;
}

export function useSearchTextContext() {
  const context = useContext(SearchTextContext);
  if (!context) {
    throw new Error(
      "useSearchTextContext must be used within a useSearchTextContext"
    );
  }
  return context;
}

export function useOnClickOutside(refs: React.RefObject<HTMLElement>[], handler: () => void) {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (refs.every((ref) => !ref.current?.contains(e.target as Node))) {
        handler();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [refs, handler]);
}