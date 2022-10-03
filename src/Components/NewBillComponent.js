import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";

export const NewBillComponent = () => {
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
    issueDate: moment(new Date()).format("MMM/DD/YYYY"),
  });
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/bill");
    // console.log("navigate");
  };
  const handleOnChange = (e) => {
    e.preventDefault();
    setInvoice({ ...invoice, [e.target.name]: e.target.value });
    //console.log("invoice", invoice);
  };
  const saveNewBillTODB = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8181/save", invoice)
      .then((response) => {
        setInvoice(response.data);
        //console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#C3D9D4",
        padding: "50px",
      }}
    >
      <div style={{ marginTop: "-3%" }}>
        <div className="modal-dialog" style={{ padding: "2%" }}>
          <div className="modal-content" style={{ backgroundColor: "#E8F27A" }}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add new bill
              </h5>
              <button
                type="button"
                // className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={handleCancel}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Customer ID"
                className="form-control my-2"
                name="customerId"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="First and Last name"
                className="form-control my-2"
                name="name"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Phone number"
                className="form-control my-2"
                name="phone"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Email"
                className="form-control my-2"
                name="email"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Address"
                className="form-control my-2"
                name="address"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="City"
                className="form-control my-2"
                name="city"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="State"
                className="form-control my-2"
                name="state"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Prevous Read"
                className="form-control my-2"
                name="previousRead"
                onChange={handleOnChange}
              />
              <input
                type="text"
                placeholder="Current Read"
                className="form-control my-2"
                name="currentRead"
                onChange={handleOnChange}
              />
              <span
                className="input-group-text"
                id="basic-addon1"
                style={{ backgroundColor: "#E8F27A" }}
              >
                $
                <input
                  type="text"
                  placeholder="Unit Price"
                  className="form-control my-2"
                  name="unitPrice"
                  onChange={handleOnChange}
                />
              </span>
              <input
                type="Date"
                min={moment().toDate().toUTCString()}
                max={moment().toDate().toUTCString()}
                placeholder="MM-DD-YYYY"
                className="form-control my-2"
                name="issueDate"
                onChange={handleOnChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleCancel}
              >
                Close
              </button>

              <button
                type="button"
                className="btn btn-success"
                onClick={() => {
                  saveNewBillTODB();
                  handleCancel();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
