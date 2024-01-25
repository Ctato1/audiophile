import { Container, Row} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import itemData from "../assets/data/data";

import ProductsList from "../components/UI/ProductsList";
import ItemCategory from "../components/UI/ItemCategory";
import PersonBlog from "../components/UI/PersonBlog";
const Speakers = () => {
  const speakers = itemData.filter((item) => item.category === "speakers");
  return (
    <Helmet title="headphones">
      <CommonSection title="SPEAKERS" />
      <section>
        <Container>
          <Row>
            <ProductsList data={speakers} />
          </Row>
        </Container>
        <section className="item__category">
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

export default Speakers;