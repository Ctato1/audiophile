import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/product-details.css";

import itemData from "../assets/data/data";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const item = itemData.filter((item) => item.id === parseInt(id))[0];

  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prev) => (prev += 1));
  };

  const decrement = () => {
    if (number === 0) {
      return;
    }
    setNumber((prev) => (prev -= 1));
  };
  const navigate = useNavigate();

  function addBox() {
    let jsxElements = []; // Initialize an empty array to store JSX elements
    for (let i = 0; i < item.box.length; i++) {
      jsxElements.push(
        <>
          <p key={i}>
            {item.boxpiece[i]}x <span>{item.box[i]}</span>
          </p>
        </>
      );
    }
    return jsxElements; // Return the array of JSX elements
  }
  return (
    <Helmet title={item.title}>
      <Container>
        <Row>
          <Col lg="12">
            <div className="go-back">
              <span onClick={() => navigate(-1)}>Go Back</span>
            </div>
          </Col>
        </Row>
        {/* info */}
        <Row className="details">
          <div className="detail-left">
            <div className="detail__img">
              <img src={item.productImg} alt={item.title} />
            </div>
          </div>
          <div className="detail-right product__info">
            {item.isNew && <span className="new-product">NEW PRODUCT</span>}
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <h4>$ {item.price}</h4>
            <div className="buy__product">
              <div className="setNumber">
                <span className="math-symbol" onClick={decrement}>
                  -
                </span>
                <span>{number}</span>
                <span className="math-symbol" onClick={increment}>
                  +
                </span>
              </div>
              <div className="addToCart">
                <button>ADD TO CART</button>
              </div>
            </div>
          </div>
        </Row>
        {/* features */}
        <Row className="features">
          <div className="features__left">
            <h3>FEATURES</h3>
            <p>{item.features[0]}</p>
            <p>{item.features[1]}</p>
          </div>
          <div className="features__right">
            <h3>IN THE BOX</h3>
            <div className="features__box">{addBox()}</div>
          </div>
        </Row>
      </Container>
    </Helmet>
  );
};

export default ProductDetails;
