import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import "../App/App.css";

const BillComponent = () => {
  const [data, setData] = useState({
    address: "",
    amount: "",
    city: "",
    currentRead: "",
    customerId: "",
    email: "",
    id: "",
    issueDate: "",
    name: "",
    phone: "",
    previousRead: "",
    state: "",
    unitPrice: "",
  });

  const [invoice, setInvoice] = useState([]);
  const navigate = useNavigate();
  const handleModal = (
    address,
    amount,
    city,
    currentRead,
    customerId,
    email,
    id,
    issueDate,
    name,
    phone,
    previousRead,
    state,
    unitPrice
  ) => {
    setData({
      address,
      amount,
      city,
      currentRead,
      customerId,
      email,
      id,
      issueDate,
      name,
      phone,
      previousRead,
      state,
      unitPrice,
    });
    console.log(
      "",

      amount
    );
  };

  const handleSubmit = async () => {
    await axios
      .get(`http://localhost:8181/invoices`)
      .then((response) => {
        setInvoice(response.data);
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  const handleAddNavigate = () => {
    navigate("/newaccount");
  };
  useEffect(() => {
    handleSubmit();
  }, [setInvoice]);
  return (
    <div
      style={{
        backgroundColor: "#f5d4a4",
        marginTop: "-30px",
        minHeight: "100vh",
      }}
    >
      <div style={{ padding: "10px" }}>
        <div style={{ marginBottom: "20px", marginTop: "70px" }}>
          <button
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            type="button"
            data-toggle="tooltip"
            title="Create new bill"
            className="btn btn-outline-success"
            onClick={handleAddNavigate}
          >
            <i className="fa-solid fa-circle-plus"></i> add new bill
          </button>
        </div>
      </div>

      <div>
        <div>
          <div>
            <div
              style={{
                marginLeft: "100px",
                padding: "30px",
                marginTop: "-90px",
              }}
            >
              <div className="row mt-5 ml-5 ">
                {invoice
                  .sort((a, b) => moment(a.issueDate) - moment(b.issueDate))
                  .map((item, key) => (
                    <div
                      key={key}
                      className="col-sm-3 m-1 d-flex justify-space-between"
                      style={{ marginLeft: "50px", width: "30%" }}
                    >
                      <div
                        className="card "
                        style={{ width: "100%", height: "87%" }}
                      >
                        <hr />
                        <div className="card-body">
                          <div style={{ height: "80%", width: "100%" }}>
                            <div
                              style={{ height: "30%", marginLeft: "20%" }}
                              className="text-justify"
                            >
                              <h5 className="card-title">
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  Customer ID:
                                </span>
                                &nbsp;&nbsp; {item.customerId}
                              </h5>
                              <h5 className="card-title">
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  Name:
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                <span style={{ fontSize: "90%" }}>
                                  {item.name}
                                </span>
                              </h5>
                              <h5 className="card-title">
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  Date:
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                                {moment
                                  .utc(item.issueDate)
                                  .format("MMM/DD/YYYY")}
                              </h5>
                              <h5 className="card-title">
                                <span
                                  style={{ color: "red", fontWeight: "bold" }}
                                >
                                  Amount:
                                </span>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                &nbsp; ${item.amount.toFixed(2)}
                              </h5>
                            </div>
                            <div style={{ marginTop: "25%" }}>
                              <button
                                type="button"
                                className="btn btn-primary"
                                data-toggle="modal"
                                data-target="#exampleModalLong"
                                onClick={() =>
                                  handleModal(
                                    item.address,
                                    item.amount,
                                    item.city,
                                    item.currentRead,
                                    item.customerId,
                                    item.email,
                                    item.id,
                                    item.issueDate,
                                    item.name,
                                    item.phone,
                                    item.previousRead,
                                    item.state,
                                    item.unitPrice
                                  )
                                }
                              >
                                View
                              </button>
                            </div>

                            <div
                              className="modal fade"
                              id="exampleModalLong"
                              tabIndex="-1"
                              role="dialog"
                              aria-labelledby="exampleModalLongTitle"
                              aria-hidden="true"
                            >
                              <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLongTitle"
                                    >
                                      {data.address}, &nbsp;{data.city},&nbsp;
                                      {data.state}
                                    </h5>

                                    <span aria-hidden="true">
                                      {data.customerId}
                                    </span>
                                  </div>
                                  <div className="d-flex flex-row justify-content-center mt-2">
                                    <div
                                      style={{
                                        marginTop: "30px",
                                        marginLeft: "30px",
                                      }}
                                      className="text-left"
                                    >
                                      <span style={{ fontWeight: "bold" }}>
                                        First and Last name: &nbsp;
                                      </span>
                                      {data.name} <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Phone : &nbsp;&nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp;
                                      </span>
                                      <span className="text-uppercase">
                                        {data.phone}
                                      </span>
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Email: &nbsp;
                                      </span>
                                      &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                      &nbsp;
                                      {data.email}
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Previous Read: &nbsp;&nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp;
                                      </span>
                                      {data.previousRead}
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Current Read: &nbsp;&nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp;
                                      </span>
                                      {data.currentRead}
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Unit Cost: &nbsp;&nbsp;&nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                        &nbsp;
                                      </span>
                                      ${parseInt(data.unitPrice).toFixed(2)}
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Amount: &nbsp; &nbsp;&nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp;
                                      </span>
                                      ${parseInt(data.amount).toFixed(2)}
                                      <br />
                                      <span style={{ fontWeight: "bold" }}>
                                        Issue Date: &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
                                      </span>
                                      {moment
                                        .utc(data.issueDate)
                                        .format("MM/DD/YYYY")}
                                      <br />
                                    </div>
                                  </div>

                                  <div className="modal-footer">
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                      data-dismiss="modal"
                                    >
                                      Pay
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-secondary"
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillComponent;
