import axios from "axios";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate, useParams } from "react-router-dom";

function UpdateComponent() {
  const { id } = useParams();

  const [invoice, setInvoice] = useState({
    customerId: "",
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    previousRead: "",
    currentRead: "",
    unitPrice: "",
    amount: "",
    isPaid: false,
    dueDate: moment(new Date()).format("MMM/DD/YYYY"),
    issueDate: moment(new Date()).format("MMM/DD/YYYY"),
  });
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    e.preventDefault();
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
    console.log(invoice);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(process.env.REACT_APP_BASE_URL_UPDATE, invoice)
      .then((response) => {
        //console.log(response.data);
        navigate("/bill");
      })
      .catch((err) => {
        console.log("error is :" + err);
      });
  };
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BASE_URL + "/" + id)
      .then((response) => {
        setInvoice(response.data);
        // console.log("hey");
      })
      .catch((err) => console.log("err is : " + err));
  }, [id]);

  const handleClose = () => {
    navigate("/bill");
  };
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#f5debc",
        }}
      >
        <div style={{ marginTop: "-3%" }}>
          <div className="modal-dialog" style={{ padding: "2%" }}>
            <div
              className="modal-content"
              style={{ backgroundColor: "#B3A99A" }}
            >
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update bill
                </h5>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  placeholder="Customer Id"
                  className="form-control my-2"
                  readOnly
                  name="customerId"
                  value={invoice.customerId}
                  onChange={(e) => handleOnChange(e)}
                />

                <input
                  type="text"
                  placeholder="First Name and last Name"
                  className="form-control my-2"
                  name="name"
                  value={invoice.name}
                  onChange={(e) => handleOnChange(e)}
                />

                <input
                  type="text"
                  placeholder="Phone Number"
                  className="form-control my-2"
                  name="phone"
                  value={invoice.phone}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="form-control my-2"
                  name="email"
                  value={invoice.email}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control my-2"
                  name="address"
                  value={invoice.address}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="City"
                  className="form-control my-2"
                  name="city"
                  value={invoice.city}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="State"
                  className="form-control my-2"
                  name="state"
                  value={invoice.state}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="Previous Read"
                  className="form-control my-2"
                  name="previousRead"
                  value={invoice.previousRead}
                  onChange={(e) => handleOnChange(e)}
                />
                <input
                  type="text"
                  placeholder="Current Read"
                  className="form-control my-2"
                  name="currentRead"
                  value={invoice.currentRead}
                  onChange={(e) => handleOnChange(e)}
                />

                <input
                  type="date"
                  placeholder="Issue Date"
                  className="form-control my-2"
                  name="issueDate"
                  value={invoice.issueDate}
                  onChange={(e) => handleOnChange(e)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleClose}
                >
                  Close
                </button>

                <button
                  type="button"
                  className="btn btn-success"
                  onClick={(e) => handleSubmit(e)}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateComponent;
