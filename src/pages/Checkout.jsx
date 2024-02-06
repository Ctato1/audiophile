import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import { Container, Row, Col } from "reactstrap";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="go-back">
            <span onClick={() => navigate(-1)}>Go Back</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="9">
          <section className="checkout-field">
            <form>
              <h3>CHECKOUT</h3>
              <p>BILLING DETAILS</p>
              <div className="form-first">
                <label htmlFor="nameInput">Name</label>
                <input id="nameInput" type="text" placeholder="John Doe" />
                <label htmlFor="emailInput">Email Address</label>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="form-second">
                <label htmlFor="phoneInput">Phone Number</label>
                <input
                  id="phoneInput"
                  type="number"
                  placeholder="+995 555-555-555"
                />
              </div>
              <p>SHIPPING INFO</p>
              <div className="form-third">
                <label htmlFor="addressInput">Address</label>
                <input
                  id="addressInput"
                  type="text"
                  placeholder="123 Williams Avenue"
                />
              </div>
              <div className="form-fourth">
                <label htmlFor="zipInput">ZIP Code</label>
                <input id="zipInput" type="text" placeholder="1234" />
                <label htmlFor="cityInput">City</label>
                <input id="cityInput" type="text" placeholder="London" />
              </div>
              <div className="form-fifth">
                <label htmlFor="countryInput">Country</label>
                <input
                  id="countryInput"
                  type="text"
                  placeholder="United Kingdom"
                />
              </div>
              <p>PAYMENT DETAILS</p>
              <div className="form-sixth">
                <h4>Payment Method</h4>
                <div className="payment-details">
                  <form className="payment-select">
                    <input id="moneyBtn" type="radio" name="card"/>
                    <label for="moneyBtn">e-Money</label>
                  </form>
                  <form className="payment-select">
                    <input id="cashBtn" type="radio" name="card"/>
                    <label for="cashBtn">Cash on Delivery</label>
                  </form>
                </div>
              </div>
            </form>
          </section>
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
