import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import ItemCategory from "../components/UI/ItemCategory";
import headPhone from "../assets/images/headphone.png";
import itemData from "../assets/data/data";
import PersonBlog from "../components/UI/PersonBlog";

import speaker_2 from '../assets/images/speaker-2.jpg'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const speaker = itemData.filter((item) => item.title === "ZX9 SPEAKER")[0];

  const speaker2 = itemData.filter((item) => item.title === "ZX7 SPEAKER")[0];
  const earphone = itemData.filter(
    (item) => item.title === "YX1 WIRELESS EARPHONES"
  )[0];
  const navigate = useNavigate();

  const firstItem = itemData.find(item=> item.title === 'XX99 Mark II Headphones')
  const secondItem = itemData.find(item=> item.title === 'ZX9 SPEAKER')
  const thirdItem = itemData.find(item=> item.title === 'ZX7 SPEAKER')
  const fourthItem = itemData.find(item=> item.title === 'YX1 WIRELESS EARPHONES')

  return (
    <div>
      <section className="hero__section">
        <Container>
          <Row>
            <div className="hero__section-main">
              <div className="hero__section-left">
                <h4>NEW PRODUCT</h4>
                <h2>XX99 Mark II Headphones</h2>
                <p>
                  Experience natural, lifelike audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>
                <button className="hero__btn" onClick={()=>{
                  window.scrollTo(0,0);
                  navigate(`/product/${firstItem.id}`)
                }}>See Product</button>
              </div>
              <div className="hero__section-right">
                <img src={headPhone} alt="headphone image" />
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <section className="item__category">
        <Container>
          <Row>
            <ItemCategory />
          </Row>
        </Container>
      </section>

      <div className="speaker__category">
        <Container>
          <Row className="speaker__category-row">
            <Col lg="6" md="12">
              <div className="speaker__category-left">
                <img src={speaker.productImg} alt="image" />
                <svg
                  width="795"
                  height="560"
                  viewBox="0 0 795 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="speaker-desktop-svg"
                >
                  <g opacity="0.202147">
                    <circle cx="323" cy="436" r="235.5" stroke="white" />
                    <circle cx="323" cy="436" r="270.5" stroke="white" />
                    <circle cx="323" cy="436" r="471.5" stroke="white" />
                  </g>
                </svg>

                <svg
                  width="327"
                  height="437"
                  viewBox="0 0 327 437"
                  fillRule="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="speaker-mobile-svg"
                >
                  <g opacity="0.202147">
                    <circle cx="162.5" cy="158.5" r="139" stroke="white" />
                    <circle cx="163" cy="158" r="159.5" stroke="white" />
                    <circle cx="163" cy="158" r="278.5" stroke="white" />
                  </g>
                </svg>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="speaker__category-right">
                <h2>{speaker.title}</h2>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button onClick={()=>{
                  window.scrollTo(0,0);
                  navigate(`/product/${secondItem.id}`)
                }}>SEE PRODUCT</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="speaker__second">
        <Container className="speaker__second-container">
          <Row className="speaker__second-row">
              <div className="speaker__second-left">
                <h2>{speaker2.title}</h2>
                <button
                onClick={()=>{
                  window.scrollTo(0,0);
                  navigate(`/product/${thirdItem.id}`)
                }}
                >SEE PRODUCT</button>
              </div>
            <img src={speaker_2} alt="speaker image" />
          </Row>
        </Container>
      </div>

      <div className="earphone__section mt-5">
        <Container className="align-items-center p-0">
          <Row className="earphone__section-row">
            <Col lg="6" md="12" className="p-0">
              <div className="earphone__section-left">
                <img src={earphone.thumbnail2} alt={earphone.title} />
              </div>
            </Col>
            <Col lg="6" md="12" className="p-0 align-items-flex-end">
              <div className="earphone__section-right">
                <h2>YX1 EARPHONES</h2>
                <button className="earphone__btn"
                onClick={()=>{
                  window.scrollTo(0,0);
                  navigate(`/product/${fourthItem.id}`)
                }}
                >See Product</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <PersonBlog />
    </div>
  );
};

export default Home;
