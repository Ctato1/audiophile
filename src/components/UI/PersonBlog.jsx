import { Col } from "reactstrap";
import imagePerson from '../../assets/images/person.png'
const PersonBlog = () => {
  return (
    <Col lg="6" className="custom-right-column">
      <div className="audophile__section-img">
        <img
          src={imagePerson}
          alt="men wearing headphone"
        />
      </div>
    </Col>
  );
};

export default PersonBlog;
