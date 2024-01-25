import React from "react";
import { Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

import "../../styles/product-card.css";

const ProductCard = ({ item, length }) => {
    const navigate = useNavigate();
    const navigationProduct =(id)=>{
        navigate(`/product/${id}`)
    }
  return (
    <Col
      lg="12"
      md="12"
      className={`mb-2  product-card ${
        length % 2 !== 0 && "product-card-reverse"
      }`}
    >
      <div className="product-card__img">
        <img src={item.productImg} alt={item.title} />
      </div>
      <div className="product-card__info">
        {item.isNew && <span className="new-product">NEW PRODUCT</span>}
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <button onClick={()=>navigationProduct(item.id)}>SEE PRODUCT</button>
      </div>
    </Col>
  );
};

export default ProductCard;
