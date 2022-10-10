import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function PaymentComponent() {
  const [info, setInfo] = useState({
    name: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvvCode: "",
    isPaid: false,
  });

  const { id } = useParams();

  const navigate = useNavigate();
  const handleOnChange = (e) => {
    e.preventDefault();
    setInfo({ ...info, [e.target.name]: e.target.value });
    console.log(info);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (info.cardNumber.length < 16 || !isNaN(info.cardNumber) === false) {
      window.alert(
        "credit card number must be sixteen(16) characters and numeric value"
      );
    } else {
      await axios
        .put(process.env.REACT_APP_BASE_URL_UPDATE, info)
        .then((response) => {
          console.log("response to data", response.data);
          navigate("/bill");
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/" + id)
      .then((response) => {
        setInfo(response.data);
        console.log("get", response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

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
            <form
              onSubmit={(e) => {
                handlePayment(e);
              }}
            >
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="inputEmail4">First Name</label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                    name="name"
                    required
                    defaultValue={info.name}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="inputPassword4">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    required
                    defaultValue={info.lastName}
                    onChange={handleOnChange}
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
                  name="address"
                  required
                  defaultValue={info.address}
                  onChange={handleOnChange}
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
                    name="city"
                    required
                    defaultValue={info.city}
                    onChange={handleOnChange}
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
                    required
                    placeholder="Zip Code"
                    name="zipcode"
                    defaultValue={info.zipcode}
                    onChange={handleOnChange}
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
                  name="cardNumber"
                  required
                  defaultValue={info.cardNumber}
                  onChange={handleOnChange}
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-3">
                  <label htmlFor="inputCity">Expiration</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputMM"
                    placeholder="MM"
                    name="mm"
                    min="1"
                    max="12"
                    required
                    defaultValue={info.mm}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="form-group col-md-3">
                  <label htmlFor="inputState">Date</label>
                  <input
                    type="number"
                    className="form-control"
                    id="inputYY"
                    required
                    min="1980"
                    max="2005"
                    placeholder="YY"
                    defaultValue={info.yy}
                    onChange={handleOnChange}
                  />
                </div>
                <div
                  className="form-group col-md-3 "
                  style={{ marginLeft: "24%" }}
                >
                  <label htmlFor="inputZip">CVV/CVD </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputZip"
                    placeholder="CVV/CVD"
                    required
                    defaultValue={info.cvvCode}
                    onChange={handleOnChange}
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
                    defaultValue={info.isPaid ? true : false}
                    onChange={(e) => handleOnChange(e)}
                  />
                  <label className="form-check-label" htmlFor="gridCheck">
                    Authorize this payment
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">
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
