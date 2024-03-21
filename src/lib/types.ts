export type Categorie = {
    name:string
}

export type Review = {
    content: string,
    createdAt:Date,
    id: string,
    productId: string,
    rating:number,
    title: string,
    updatedAt:Date,
    userId:string,
    year: number
}

export type ProductItem = {
    id:string,     
    name:          string,    
    price:         number,
    discount:      number,
    image:        string,
    brand:         string,
    countInStock:  number,
    description:   string,
    averageRating: number,
    slug:         string,
    sku:           string,
    startsAt:      Date,
    endsAt:        Date,
    categories: Categorie[],
    review: Review[]
}
export type ProductItemExpended = {
    id:string,     
    name:          string,    
    price:         number,
    discount:      number,
    image:        string,
    brand:         string,
    countInStock:  number,
    description:   string,
    averageRating: number,
    slug:         string,
    sku:           string,
    startsAt:      Date,
    endsAt:        Date,
    categories: Categorie[],
    review: Review[]
}
  
export type ReceivedProduct = {
    success: boolean,
    message: string,
    fetchedProduct: ProductItemExpended
}

export type ReceivedProducts = {
    success: boolean,
    message: string,
    products: ProductItemExpended[],
}

export type PagesData = {
    currentPage:number, finalPage:number, nextPage:number, prevPage:number, count:number
}

export type ProductItemsAPIResponse = {
    message: string,
    filteredProducts: ProductItemExpended[],
    count: number,
    currentPage:number,
    finalPage:number,
    nextPage:number,
    prevPage:number,
}


export type PageDirection = "next" | "previous";
export type SortBy = "price" | "raiting";
