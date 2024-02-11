import { Container, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import itemData from "../assets/data/data";

import ProductsList from "../components/UI/ProductsList";
import ItemCategory from "../components/UI/ItemCategory";
import PersonBlog from "../components/UI/PersonBlog";
const Earphones = () => {
  const earphones = itemData.filter((item) => item.category === "earphones");
  return (
    <Helmet title="headphones">
      <CommonSection title="EARPHONES" />
      <section>
        <Container >
          <Row className="pb-3">
            <ProductsList data={earphones} />
          </Row>
        </Container>
        <section className="item__category mt-5">
          <Container>
            <Row>
              <ItemCategory />
            </Row>
          </Container>
        </section>
        <PersonBlog/>
      </section>
    </Helmet>
  );
};

export default Earphones;