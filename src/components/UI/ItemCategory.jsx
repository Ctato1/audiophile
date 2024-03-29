import React from "react";
import { Col } from "reactstrap";
import "./item-category.css";
import shadow from "../../assets/images/shadow.png";
import { useNavigate } from "react-router-dom";
import itemData from "../../assets/data/data";
import { motion } from "framer-motion";
const ItemCategory = () => {
  const selectedItems = itemData.filter(
    (item) =>
      item.title === "XX99 Mark I Headphones" ||
      item.title === "ZX9 SPEAKER" ||
      item.title === "YX1 WIRELESS EARPHONES"
  );
  const navigate = useNavigate();

  return (
    <div className="responsive__items d-flex align-items-center justify-content-center">
      {selectedItems.map((item) => (
        <Col
          lg="4"
          key={item.id}
          onClick={() => {
            window.scrollTo(0,0);
            navigate(`/${item.category}`);
          }}
        >
          <motion.div className="itemCategory" whileHover={{scale: 0.94}}>
            <div className="itemCategory__imgs">
              <img src={item.productImg} alt={item.title} />
              <img src={shadow} alt="a shadow" />
            </div>

            <div className="itemCategory-info">
              <h5 className="itemCategory-name">{item.category}</h5>
              <div className="itemCategory-links">
                <span>SHOP</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                >
                  <path
                    d="M1.3219 1L6.3219 6L1.3219 11"
                    stroke="#D87D4A"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </Col>
      ))}
    </div>
  );
};

export default ItemCategory;
