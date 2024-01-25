import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import ItemCategory from "../components/UI/ItemCategory";
import headPhone from "../assets/images/headphone.png";
import itemData from "../assets/data/data";
import PersonBlog from "../components/UI/PersonBlog";

const Home = () => {
  const speaker = itemData.filter((item) => item.title === "ZX9 SPEAKER")[0];

  const speaker2 = itemData.filter((item) => item.title === "ZX7 SPEAKER")[0];
  const earphone = itemData.filter(
    (item) => item.title === "YX1 WIRELESS EARPHONES"
  )[0];

  return (
    <div>
      <section className="hero__section">
        <Container>
          <Row>
            <div className="hero__section-main">
              <Col lg="6" md="5">
                <div className="hero__section-left">
                  <h4>NEW PRODUCT</h4>
                  <h2>XX99 Mark II Headphones</h2>
                  <p>
                    Experience natural, lifelike audio and exceptional build
                    quality made for the passionate music enthusiast.
                  </p>
                  <button className="hero__btn">See Product</button>
                </div>
              </Col>
              <Col lg="6" md="7">
                <div className="hero__section-right">
                  <img src={headPhone} alt="headphone image" />
                </div>
              </Col>
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
            <Col lg="7" md="6">
              <div className="speaker__category-left">
                <img src={speaker.productImg} alt="image" />
                <svg
                  width="795"
                  height="560"
                  viewBox="0 0 795 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.202147">
                    <circle cx="323" cy="436" r="235.5" stroke="white" />
                    <circle cx="323" cy="436" r="270.5" stroke="white" />
                    <circle cx="323" cy="436" r="471.5" stroke="white" />
                  </g>
                </svg>
              </div>
            </Col>
            <Col lg="5" md="6">
              <div className="speaker__category-right">
                <h2>{speaker.title}</h2>
                <p>
                  Upgrade to premium speakers that are phenomenally built to
                  deliver truly remarkable sound.
                </p>
                <button>SEE PRODUCT</button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="speaker__second">
        <Container className="speaker__second-container">
          <Row className="speaker__second-row">
            <Col lg="6">
              <div className="speaker__second-left">
                <h2>{speaker2.title}</h2>
                <button>SEE PRODUCT</button>
              </div>
            </Col>
            <img src={speaker2.thumbnail3} alt="speaker image" />
          </Row>
        </Container>
      </div>

      <div className="earphone__section m-5">
        <Container className="align-items-center">
          <Row className="earphone__section-row">
            <Col lg="6" className="p-0">
              <div className="earphone__section-left">
                <img src={earphone.thumbnail2} alt={earphone.title} />
              </div>
            </Col>
            <Col lg="6" className="p-0 align-items-flex-end">
              <div className="earphone__section-right">
                <h2>YX1 EARPHONES</h2>

                <button className="earphone__btn">See Product</button>
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
