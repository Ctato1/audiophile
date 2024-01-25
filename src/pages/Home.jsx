import { Container, Row, Col } from "reactstrap";
import "../styles/home.css";
import ItemCategory from "../components/UI/ItemCategory";
import headPhone from "../assets/images/headphone.png";
import itemData from "../assets/data/data";

const Home = () => {
  const speaker = itemData.filter((item) => item.title === "ZX9 SPEAKER")[0]

  const speaker2 = itemData.filter((item) => item.title === "ZX7 SPEAKER")[0]
  const earphone = itemData.filter((item) => item.title === "YX1 WIRELESS EARPHONES")[0]


  console.log(speaker);
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
          <Row><ItemCategory /></Row>
        </Container>
      </section>
      {/* 
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
            <img
              src="https://s3-alpha-sig.figma.com/img/7ae3/b1ab/940fc98ffa8a0a8e425a83d26aafb51e?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ABVcwxU88jDZg0QyoDQbWU87SfiDdNKLmIUUrkrsqL69TeL4LozhWxbVmI2XPPR7hok9kYk45FfCm7r44Oh-yV-QL1jop1K10UY~DdmSjw9f7KhbRrg536dl49KCEPrmBoU7ixyYka-98EizAu~av7X4kX9-HAsRqnmYmolyhqZWgcwxeOvkawJ1wewQS1TpA4N-vrxclw~TiQBIcyPjLzANQMfZOmQzcTWNirnv0m3tmO1pFyI31p2IGbznE13jCOn3PFmQTvj2k7kwaeqxkwbAEXsmzLkc5JxhwSbBW--lEkv4UkwpiAUSX7VZ4xd67gUeeCKRAxf4RIMhAZGj3g__"
              alt="speaker image"
            />
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

      <div className="audophile__section">
        <Container  >
          <Row className="d-flex align-items-center justify-content-space-between">
            <Col lg="6">
              <div className="audophile__section-info">
                <h3>
                  Bringing you the <span>best</span> audio gear
                </h3>
                <p>
                  Located at the heart of New York City, Audiophile is the
                  premier store for high end headphones, earphones, speakers,
                  and audio accessories. We have a large showroom and luxury
                  demonstration rooms available for you to browse and experience
                  a wide range of our products. Stop by our store to meet some
                  of the fantastic people who make Audiophile the best place to
                  buy your portable audio equipment.
                </p>
              </div>
            </Col>
            <Col lg="6" className="custom-right-column">
              <div className="audophile__section-img">
                <img
                  src=" https://s3-alpha-sig.figma.com/img/40fc/9ebb/9d58f1c7dc8b0d31f292fcfa9f9efe8b?Expires=1705276800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TJGMEf7nVkudguQbu7ctnBjtjICAjc13PmLq4T7R5v6lgh8iC5dzkhxOosxBJ~Yp9ztq1nIWEhTdM01IiTKnBS6UJtBEx17JffhSQPiO77thL~uf~tpP7Kph0rmW~0tP3K74noh351FM08PXSEAfoU7EBqQFCfQglrpoLwE7atEVwH6Q9I4FUlNpMHqCffFZscJOtL28WzNS~LklPPGkGP7h7PvjUU7Ju7s9~N-Za2jWUwYipwgqGAUJqKZEG3xgZ1npRvZckmcP62ZmXqqDxwVBKPLpjh1TfwaA3QhuW2IPFR~qLKxQ8~n5cVbVcJJwX9OU0Xb9n2bQGUZu7qpDEw__"
                  alt="men wearing headphone"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       */}
    </div>
  );
};

export default Home;
