import { useActiveId, usePrescriptionItem } from "../lib/hooks";
import BookmarkIcon from "./BookmarkIcon";

export default function ProductItemContent() {
  const activeId = useActiveId();
  const prescriptionItem = usePrescriptionItem(activeId);
  if (!prescriptionItem) {
    return <EmptyProductContent />;
  }

  const { article, prescriber } = prescriptionItem;

  return (
    <section className="product-details">
      <div>
        <img src="../../public/hero.jpg" alt="#" />
        <section className="product-info">
          <div className="product-info__left">
            <div className="product-info__badge">
              <img src="../../public/download.jpeg" width="50px" />
            </div>
            <div className="product-info__below-badge">
              <time className="product-info__time">{article.stockStatus}</time>

              <BookmarkIcon />
            </div>
          </div>

          <div className="product-info__right">
            <h2 className="second-heading">{article.productLongName}</h2>
            <p className="product-info__company">{article.header}</p>
            <p className="product-info__description">{article.preamble}</p>
          </div>
        </section>

        <div className="product-details__other">
          <section className="qualifications">
            <div className="qualifications__left">
              <h4 className="fourth-heading">Prescriber</h4>
            </div>
            <div>
              <p className="qualifications__item">{prescriber.name}</p>
            </div>
          </section>

          <section className="qualifications">
            <div className="reviews__left">
              <h4 className="fourth-heading">Workplace</h4>
            </div>
            <div>
              <p className="qualifications__item">{prescriber.workplace}</p>
            </div>
          </section>
          <section className="qualifications">
            <div className="reviews__left">
              <h4 className="fourth-heading">Profession</h4>
            </div>
            <div>
              <p className="qualifications__item">{prescriber.profession}</p>
            </div>
          </section>
          <section className="qualifications">
            <div className="reviews__left">
              <h4 className="fourth-heading">Phone Nr.</h4>
            </div>
            <div>
              <p className="qualifications__item">{prescriber.phoneNumber}</p>
            </div>
          </section>
        </div>

        <footer className="product-details__footer">
          <p className="product-details__footer-text">
            Please do not share this informations!
          </p>
        </footer>
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
