


import { useState } from "react";
import { BsFillBagFill, BsCheckCircleFill } from "react-icons/bs";

const Card = ({ img, title, star, reviews, prevPrice, newPrice }) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setShowModal(true);

  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <section className="productcard">
        <img src={img} alt={title} className="product-card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>

          <section className="card-reviews">  {star} {star}
            <span className="total-reviews">({reviews} reviews)</span>
          </section>
          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> <span className="new-price">{newPrice}</span>
            </div>
            <div className="bag">
              {addedToCart ? (
                <BsCheckCircleFill className="added-icon" aria-label="Added to cart" />
              ) : (
                <BsFillBagFill className="bag-icon" aria-label="Add to cart" />
              )}
            </div>
          </section>
          <button onClick={handleAddToCart} disabled={addedToCart}>
            {addedToCart ? "Added" : "Add to Cart"}
          </button>
        </div>
      </section>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>Item Added to Cart!</h2>
            <p>{title} has been successfully added to your cart.</p>
            <button className="close-modal" onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

