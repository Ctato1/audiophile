import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/product-details.css";

import itemData from "../assets/data/data";
import Helmet from "../components/Helmet/Helmet";
import { Col, Container, Row } from "reactstrap";
import ProductsList from "../components/UI/ProductsList";
import ItemCategory from "../components/UI/ItemCategory";
import PersonBlog from "../components/UI/PersonBlog";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../store/shopping-cart/CartSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = itemData.filter((item) => item.id === parseInt(id))[0];

  const [number, setNumber] = useState(0);
  const relatedProducts = itemData
    .filter((filtered) => filtered.title !== item.title)
    .slice(0, 3);
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
        <p key={i}>
          <span className="box-quantity">{item.boxpiece[i]}x </span>{" "}
          {item.box[i]}
        </p>
      );
    }
    return jsxElements; // Return the array of JSX elements
  }
  
  function addToCart() {
    if (number === 0) {
      return;
    }
    dispatch(
      cartActions.addItem({
        id: item.id,
        title: item.title,
        image: item.productImg,
        price: item.price,
        quantity: number,
        totalPrice: item.price,
        category: item.category,
      })
    );
    setNumber(prev => prev = 0)
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
                <motion.button whileTap={{scale: 1.2}} onClick={addToCart}>ADD TO CART</motion.button>
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

        <Row>
          <div className="product__images">
            <div className="product__images-left">
              <img src={item.thumbnail1} alt={item.category} />
              <img src={item.thumbnail2} alt={item.category} />
            </div>
            <div className="product__images-right">
              <img src={item.thumbnail3} alt={item.category} />
            </div>
          </div>
        </Row>
        <Row className="d-flex align-items-center justify-content-center ">
          <ProductsList similar="true" data={relatedProducts} />
        </Row>
      </Container>
      <Container className="mt-5">
        <Row>
          <ItemCategory />
        </Row>
      </Container>
      <PersonBlog />
    </Helmet>
  );
};

export default ProductDetails;
