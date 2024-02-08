import { useNavigate } from "react-router-dom";
import "../styles/checkout.css";
import { Container, Row, Col } from "reactstrap";
import { useState } from "react";

const Checkout = () => {
  const navigate = useNavigate();

  const [payment, setPayment] = useState(false);
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="go-back mt-3 mb-5">
            <span onClick={() => navigate(-1)} style={{ cursor: "pointer" }}>
              Go Back
            </span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col lg="9">
          <section className="checkout-field">
            <form>
              <h3>CHECKOUT</h3>
              <p>BILLING DETAILS</p>
              <div className="form-first desktop-field">
                <div className="desktop-div">
                  <label htmlFor="nameInput">Name</label>
                  <input
                    id="nameInput"
                    type="text"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="desktop-div">
                  <label htmlFor="emailInput">Email Address</label>
                  <input
                    id="emailInput"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                  />
                </div>
              </div>
              <div className="form-second">
                <label htmlFor="phoneInput">Phone Number</label>
                <input
                  id="phoneInput"
                  type="number"
                  placeholder="+995 555-555-555"
                  required
                />
              </div>
              <p>SHIPPING INFO</p>
              <div className="form-third">
                <label htmlFor="addressInput">Address</label>
                <input
                  id="addressInput"
                  type="text"
                  placeholder="123 Williams Avenue"
                  required
                />
              </div>
              <div className="form-fourth  desktop-field">
                <div className="desktop-div">
                  <label htmlFor="zipInput">ZIP Code</label>
                  <input
                    id="zipInput"
                    type="text"
                    placeholder="1234"
                    required
                  />
                </div>
                <div className="desktop-div">
                  <label htmlFor="cityInput">City</label>
                  <input
                    id="cityInput"
                    type="text"
                    placeholder="London"
                    required
                  />
                </div>
              </div>
              <div className="form-fifth">
                <label htmlFor="countryInput">Country</label>
                <input
                  id="countryInput"
                  type="text"
                  placeholder="United Kingdom"
                  required
                />
              </div>
              <p>PAYMENT DETAILS</p>
              <div className="form-sixth  desktop-field">
                <h4>Payment Method</h4>
                <div className="payment-details">
                  <div
                    className="payment-select"
                    style={{ border: payment ? "1px solid red" : "" }}
                  >
                    <input
                      id="moneyBtn"
                      type="radio"
                      name="card"
                      checked={payment ? true : false}
                      onClick={() => setPayment((prev) => (prev = true))}
                    />
                    <label
                      for="moneyBtn"
                      onClick={() => setPayment((prev) => (prev = true))}
                    >
                      e-Money
                    </label>
                  </div>
                  <div
                    className="payment-select"
                    style={{ border: !payment ? "1px solid red" : "" }}
                  >
                    <input
                      id="cashBtn"
                      type="radio"
                      name="card"
                      checked={!payment ? true : false}
                      onClick={() => setPayment((prev) => (prev = false))}
                    />
                    <label
                      for="cashBtn"
                      onClick={() => setPayment((prev) => (prev = false))}
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>
              </div>
              {payment && (
                <div className="payment-card desktop-field">
                  <div className="desktop-div">
                    <label htmlFor="cardInput">e-Money Number</label>
                    <input
                      id="cardInput"
                      type="number"
                      placeholder="1111 2222 3333 4444"
                      required
                    />
                  </div>
                  <div className="desktop-div">
                    <label htmlFor="pinInput">e-Money PIN</label>
                    <input
                      id="pinInput"
                      type="number"
                      placeholder="1234"
                      required
                    />
                  </div>
                </div>
              )}
            </form>
          </section>
        </Col>
        <Col lg="3"></Col>
      </Row>
    </Container>
  );
};

export default Checkout;
