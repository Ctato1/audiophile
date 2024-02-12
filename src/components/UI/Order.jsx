import { useNavigate } from "react-router-dom";
import "../../styles/order.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/CartSlice";
import { useState } from "react";
const Order = ({ items, totalAmount, close }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [className, setClassName] = useState(false);
  const [showAll, setShowAll] = useState(false);
  if (items.length === 0) {
    return;
  }

  const removeItems = (e) => {
    setClassName(true);
    setTimeout(() => {
      setClassName(false);
      close();
      navigate("/");
      dispatch(cartActions.deleteAll());
      window.scrollTo(0, 0);
    }, 1000);
  };

  return (
    <section className="order__section">
      <div
        className="black__theme"
        onClick={() => {
          close();
        }}
      ></div>
      <div
        className={`order__container  ${className && "animated__container"}`}
      >
        <div className="order__logo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
          >
            <circle cx="32" cy="32" r="32" fill="#D87D4A" />
            <path
              d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812"
              stroke="white"
              stroke-width="4"
            />
          </svg>
        </div>
        <div className="order__title">
          <h4>
            THANK YOU <br />
            FOR YOUR ORDER
          </h4>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <section className="order__info">
          <div className="main__order">
            {!showAll && (
              <div className="ordered__item">
                <div className="ordered__img">
                  <img src={items[0]?.image} alt={items[0]?.title} />
                </div>
                <div className="ordered__title">
                  <h6>{items[0]?.title}</h6>
                  <p>$ {items[0]?.totalPrice}</p>
                </div>
                <div className="ordered__quantity">
                  <span>x{items[0]?.quantity}</span>
                </div>
              </div>
            )}
            {showAll &&
              items?.map((item) => (
                <div className="ordered__item py-1">
                  <div className="ordered__img">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="ordered__title">
                    <h6>{item.title}</h6>
                    <p>$ {item.totalPrice}</p>
                  </div>
                  <div className="ordered__quantity">
                    <span>x{item.quantity}</span>
                  </div>
                </div>
              ))}
            {items?.length > 1 ? (
              <div className="all__items">
                <span onClick={() => setShowAll((prev) => (prev = !prev))}>
                  {!showAll
                    ? `and ${items?.length - 1} other item(s)`
                    : `show less`}
                </span>
              </div>
            ) : (
              ""
            )}
          </div>

          <div className="ordered__total">
            <h4>GRAND TOTAL</h4>
            <p>$ {totalAmount}</p>
          </div>
        </section>
        <button className="orange__btn order__btn" onClick={removeItems}>
          BACK TO HOME
        </button>
      </div>
    </section>
  );
};

export default Order;
