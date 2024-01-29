import { useNavigate } from "react-router-dom";
import { Col } from "reactstrap";
import '../../styles/similar-card.css'

const SimilarCard = ({ item }) => {
  const navigate = useNavigate();
  const navigationProduct = (id) => {
    window.scrollTo(0,0);
    navigate(`/product/${id}`);
  };
  return (
    <Col lg="4" md="6" xs='12' className="similar__card">
      <div className="similar__card-img">
        <img src={item.productImg} alt={item.title} />
      </div>
      <div className="similar__card-info">
        <h2>{item.title.split(' ').shift()}</h2>
        <button onClick={() => navigationProduct(item.id)}>SEE PRODUCT</button>
      </div>
    </Col>
  );
};

export default SimilarCard;
