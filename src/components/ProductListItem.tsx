import BookmarkIcon from "./BookmarkIcon";
import { ProductItemExpended } from "../lib/types";

type ProductListItem = {
  product: ProductItemExpended;
  isActive: boolean;
};

export default function ProductListItem({
  product,
  isActive,
}: ProductListItem) {
  const { countInStock, name, description, image } = product;
  const inStock = countInStock > 0 ? true : false;

  return (
    <li
      className={`product-item${
        isActive ? " background-pink" : !inStock ? " background-red" : ""
      }`}
    >
      <a href={`#${product.id}`} className="product-item__link">
        <div className="product-item__badge">
          <img src={image} width="38px" />
        </div>

        <div className="product-item__middle">
          <h3 className="third-heading">{name}</h3>
          <p className="product-item__company">{description}</p>
        </div>

        <div className="product-item__right">
          <BookmarkIcon id={product.id} />
          <time className="product-item__time">{countInStock}</time>
        </div>
      </a>
    </li>
  );
}
