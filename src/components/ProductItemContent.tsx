import { StarIcon } from "@radix-ui/react-icons";
import { useActiveIdContext, useProductItem } from "../lib/hooks";
import BookmarkIcon from "./BookmarkIcon";

export default function ProductItemContent() {
  const { activeId } = useActiveIdContext();
  const { fetchedProduct } = useProductItem(activeId);

  if (!fetchedProduct) {
    return <EmptyProductContent />;
  }
  const {
    id,
    name,
    price,
    description,
    countInStock,
    slug,
    image,
    averageRating,
  } = fetchedProduct;

  return (
    <section className="product-details">
      <div>
        <div>
          <img src={image} alt="top view of product image" width="50px" />
          <img src={image} alt="closeup product image" width="50px" />
          <img src={image} alt="detailed image" width="50px" />
        </div>
        <div>
          <img src={image} alt="main product image" width="200px" />
        </div>
        <div>
          <h1>{name}</h1>
          <span>
            <span>FROM </span>
            {`${price} sek`}
            <div>
              <div>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
          </span>
          <div className="product-info__right">
            <p className="product-info__description">{description}</p>
          </div>
          <div>
            <p className="qualifications__item">
              Average reating {averageRating}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function EmptyProductContent() {
  return (
    <section className="product-details">
      <div>
        <div className="product-details__start-view">
          <p>What are you looking for?</p>
          <p>
            Start by choosing prescription on sidebar or searching for any
            prescription
          </p>
        </div>
      </div>
    </section>
  );
}
