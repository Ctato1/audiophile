import { Col, Container, Row } from "reactstrap";
import imagePerson from "../../assets/images/person.png";
import "../../styles/person-blog.css";

const PersonBlog = () => {
  return (
    <div className="audophile__section px-2">
      <Container>
        <Row className="d-flex align-items-center justify-content-space-between">
          <Col lg="6">
            <div className="audophile__section-info">
              <h3>
                Bringing you the <span>best</span> audio gear
              </h3>
              <p>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
          </Col>
          <Col lg="6" className="custom-right-column">
            <div className="audophile__section-img">
              <img src={imagePerson} alt="men wearing headphone" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PersonBlog;
