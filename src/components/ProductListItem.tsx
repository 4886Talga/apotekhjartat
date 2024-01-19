import BookmarkIcon from "./BookmarkIcon";
import { Prescription } from "../lib/types";

type ProductListItem = {
  prescription: Prescription;
  isActive: boolean;
};

export default function ProductListItem({
  prescription,
  isActive,
}: ProductListItem) {
  const { article } = prescription;
  const inStock = article.stock! > 0 ? true : false;

  return (
    <li
      className={`product-item${
        isActive ? " background-pink" : !inStock ? " background-red" : ""
      }`}
    >
      <a
        href={`#${prescription.prescriptionId}`}
        className="product-item__link"
      >
        <div className="product-item__badge">
          <img src="../../public/apj_logga_pink.png" width="38px" />
        </div>

        <div className="product-item__middle">
          <h3 className="third-heading">{article.productName}</h3>
          <p className="product-item__company">{article.preamble}</p>
        </div>

        <div className="product-item__right">
          <BookmarkIcon />
          <time className="product-item__time">{article.stock}</time>
        </div>
      </a>
    </li>
  );
}
