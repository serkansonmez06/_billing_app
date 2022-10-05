import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function PaymentComponent() {
  const [payment, setPayment] = useState({
    isPaid: false,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    e.preventDefault();
    setPayment({ ...payment, [e.target.name]: e.target.value });
    console.log(payment);
  };

  const handlePayment = async () => {
    await axios
      .put(`http://localhost:8181/update/`, payment)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get(`http://localhost:8181/invoices/` + id)
      .then((response) => {
        setPayment(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const handleNavigate = () => {
    navigate("/bill");
  };
  return (
    <div
      style={{
        backgroundColor: "#C3D9D4",
        marginTop: "-30px",
        minHeight: "100vh",
      }}
    >
      <div className="d-flex justify-content-center" style={{ padding: "5%" }}>
        <div className="d-flex justify-content-center">
          <div style={{ width: "60%", marginTop: "5%" }}>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPassword4"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Address"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputCity">City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputCity"
                    placeholder="City"
                  />
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">State</label>
                  <select id="inputState" className="form-control">
                    <option>Massachusetts</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Colorado</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputZip">Zip</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    placeholder="Zip Code"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="inputAddress">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Card Number"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label htmlFor="inputCity">Expiration</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputMM"
                    placeholder="MM"
                  />
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputState">Date</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputYY"
                    placeholder="YY"
                  />
                </div>
                <div
                  className="form-group col-md-4 "
                  style={{ marginLeft: "33%" }}
                >
                  <label htmlFor="inputZip">CVV/CVD </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    placeholder="CVV/CDV"
                  />
                </div>
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="gridCheck"
                    name="isPaid"
                    value={payment.isPaid ? true : false}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Authorize this payment
                  </label>
                </div>
              </div>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  handlePayment(e);
                  handleNavigate();
                }}
              >
                Make Payment
              </button>
            </form>
          </div>
        </div>
        <div style={{ marginTop: "5%" }}>
          <div className="row">
            <div className="col">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/06/VISA-Logo-1976.png"
                alt="visa"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
            <div className="col">
              <img
                src="https://brand.mastercard.com/content/dam/mccom/brandcenter/brand-history/brandhistory_mc1996_100_2x.png"
                alt="mastercard"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="https://1000logos.net/wp-content/uploads/2016/10/American-Express-Color.png"
                alt="american express"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
            <div className="col">
              <img
                src="https://1000logos.net/wp-content/uploads/2021/05/Discover-logo.png"
                alt="discover"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="https://1000logos.net/wp-content/uploads/2017/05/PayPal-Logo-2007.png"
                alt="paypal"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
            <div className="col">
              <img
                src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.png"
                alt="google pay"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src="https://download.logo.wine/logo/Apple_Pay/Apple_Pay-Logo.wine.png"
                alt="apple pay"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
            <div className="col">
              <img
                src="https://www.logolynx.com/images/logolynx/97/977a81c1224ab16617abe2fd224fa3ee.png"
                alt="samsung pay"
                style={{
                  objectFit: "fill",
                  width: "100%",
                  height: "70px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentComponent;
