import axios from "axios";
import React, { useEffect, useState } from "react";
import { selectUser } from "../Components/redux/userSlice";
import { useSelector } from "react-redux";
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
    dueDate: "",
    isPaid: false,
  });

  const [invoice, setInvoice] = useState([]);
  const navigate = useNavigate();
  const [admin, setAdmin] = useState([]);
  const [searchDate, setSearchDate] = useState({
    startDate: moment(new Date()).format("MMM/DD/YYYY"),
    endDate: moment(new Date()).format("MMM/DD/YYYY"),
  });
  const user = useSelector(selectUser);
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
    unitPrice,
    dueDate,
    paid
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
      dueDate,
      paid,
    });
    // console.log(
    //   "",

    //   paid
    //);
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setSearchDate({ ...searchDate, [e.target.name]: e.target.value });
    // console.log("/start", searchDate.startDate);
    // console.log("/end", searchDate.endDate);
  };

  const getAdminInfo = async () => {
    await axios
      .get(`http://localhost:8181/admin`)
      .then((response) => {
        setAdmin(response.data[0].email);
        // console.log(response.data[0].email);
      })
      .catch((err) => console.log(err));
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
  const deleteBill = async (id) => {
    const confirmm = window.confirm("Are you sure you want to delete bill");

    if (confirmm) {
      await axios.delete(`http://localhost:8181/invoices/` + id).then(() => {
        const remainingData = invoice.filter((i) => i.id !== id);
        setInvoice(remainingData);
      });
    } else {
    }
  };

  const handleFilter = (e) => {
    const filterDate = invoice.filter((a) => {
      return (
        a.issueDate >= searchDate.startDate && a.issueDate <= searchDate.endDate
      );
    });
    setInvoice(filterDate);
  };

  const updateBill = (id) => {
    //console.log("update " + id);
    navigate("/update/" + id);
  };

  const handlePayment = (id) => {
    //console.log("payment " + id);
    navigate("/payment/" + id);
  };
  useEffect(() => {
    handleSubmit();
    getAdminInfo();
  }, [setInvoice]);
  return (
    <div
      style={{
        backgroundColor: "#C3D9D4",
        marginTop: "-30px",
        minHeight: "100vh",
      }}
    >
      <div>
        {admin.toString().toUpperCase() === user.email.toUpperCase() ? (
          <div>
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
                <br />
                <br />
                <br />

                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "38%" }}
                >
                  <div className="d-flex align-items-start">
                    <div className="col-xs-2">
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        From:{" "}
                      </span>
                      <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        className="form-control my-2 "
                        name="startDate"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-xs-2" style={{ marginLeft: "2%" }}>
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        To:
                      </span>
                      <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        className="form-control my-2 col-xs-2"
                        name="endDate"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div
                      className="col-xs-2"
                      style={{ marginTop: "3%", marginLeft: "10%" }}
                    >
                      <br />
                      <button
                        className="btn btn-info"
                        onClick={(e) => handleFilter(e)}
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
                          style={{
                            marginLeft: "50px",
                            width: "30%",
                          }}
                        >
                          <div
                            className="card "
                            style={{ width: "100%", height: "87%" }}
                          >
                            <hr />
                            <div className="card-body">
                              <div style={{ height: "80%", width: "100%" }}>
                                <div
                                  style={{ height: "30%", marginLeft: "15%" }}
                                  className="text-justify"
                                >
                                  <h5 className="card-title">
                                    <span
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Customer ID:
                                    </span>
                                    &nbsp;&nbsp; {item.customerId}
                                  </h5>
                                  <h5 className="card-title">
                                    <span
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
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
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Bill Period:
                                    </span>
                                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
                                    {moment
                                      .utc(item.issueDate)
                                      .format("MMM/DD/YYYY")}
                                  </h5>
                                  <h5 className="card-title">
                                    <span
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Amount:
                                    </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp; ${item.amount.toFixed(2)}
                                  </h5>
                                  <h5 className="card-title">
                                    <span
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Due Date:
                                    </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                    {moment
                                      .utc(item.dueDate)
                                      .format("MMM/DD/YYYY")}
                                  </h5>
                                  <h5 className="card-title">
                                    <span
                                      style={{
                                        color: "#ffa500",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Paid:
                                    </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                    {item.isPaid ? (
                                      <span
                                        style={{
                                          color: "green",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Paid
                                      </span>
                                    ) : (
                                      <span
                                        style={{
                                          color: "red",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        UnPaid
                                      </span>
                                    )}
                                  </h5>
                                </div>
                                <div
                                  style={{
                                    marginTop: "42%",
                                    marginLeft: "15%",
                                    marginRight: "8%",
                                  }}
                                  className="d-flex justify-content-between"
                                >
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-toggle="tooltip"
                                    title="Delete bill"
                                    onClick={() => {
                                      deleteBill(item.id);
                                    }}
                                  >
                                    <i className="fa-solid fa-trash-can"></i>
                                  </button>
                                  <button
                                    className="btn btn-warning"
                                    type="button"
                                    data-toggle="tooltip"
                                    title="Update bill"
                                    onClick={() => {
                                      updateBill(item.id);
                                    }}
                                  >
                                    UPDATE
                                  </button>
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
                                        item.unitPrice,
                                        item.dueDate,
                                        item.isPaid
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
                                          {data.address}, &nbsp;{data.city}
                                          ,&nbsp;
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
                                          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                          {data.email}
                                          <br />
                                          <span style={{ fontWeight: "bold" }}>
                                            Previous Read: &nbsp;&nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp;
                                          </span>
                                          {data.previousRead}
                                          <br />
                                          <span style={{ fontWeight: "bold" }}>
                                            Current Read: &nbsp;&nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                          </span>
                                          {data.currentRead}
                                          <br />
                                          <span style={{ fontWeight: "bold" }}>
                                            Unit Cost: &nbsp;&nbsp;&nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;
                                            &nbsp;&nbsp; &nbsp;
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
                                            Issue Date: &nbsp; &nbsp; &nbsp;
                                            &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                            &nbsp;
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
                                          onClick={() => {
                                            handlePayment(data.id);
                                          }}
                                        >
                                          Make Payment
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
        ) : (
          <div>
            <div
              style={{
                backgroundColor: "#f5d4a4",
                marginTop: "90px",
                minHeight: "100vh",
              }}
            >
              <div
                style={{
                  marginLeft: "100px",
                  padding: "30px",
                  marginTop: "-90px",
                }}
              >
                <br />
                <br />
                <br />
                <div
                  className="d-flex align-items-center"
                  style={{ marginLeft: "33%" }}
                >
                  <div className="d-flex align-items-start">
                    <div className="col-xs-2">
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        From:
                      </span>
                      <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        className="form-control my-2 "
                        name="startDate"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className="col-xs-2" style={{ marginLeft: "2%" }}>
                      <span style={{ color: "green", fontWeight: "bold" }}>
                        To:
                      </span>
                      <input
                        type="date"
                        placeholder="MM-DD-YYYY"
                        className="form-control my-2 col-xs-2"
                        name="endDate"
                        onChange={handleOnChange}
                      />
                    </div>
                    <div
                      className="col-xs-2"
                      style={{ marginTop: "2%", marginLeft: "10%" }}
                    >
                      <br />

                      <button
                        className="btn btn-info"
                        onClick={(e) => handleFilter(e)}
                      >
                        Filter
                      </button>
                    </div>
                  </div>
                </div>
                <div className="row mt-5 ml-5 ">
                  {invoice
                    .sort((a, b) => moment(a.issueDate) - moment(b.issueDate))
                    .filter(
                      (a) => a.email.toUpperCase() === user.email.toUpperCase()
                    )
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
                                style={{
                                  height: "30%",
                                  marginLeft: "15%",
                                }}
                                className="text-justify"
                              >
                                <h5 className="card-title">
                                  <span
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Customer ID:
                                  </span>
                                  &nbsp;&nbsp; {item.customerId}
                                </h5>
                                <h5 className="card-title">
                                  <span
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
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
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Issue Date:
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  {moment
                                    .utc(item.issueDate)
                                    .format("MMM/DD/YYYY")}
                                </h5>
                                <h5 className="card-title">
                                  <span
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Amount:
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp; ${item.amount.toFixed(2)}
                                </h5>
                                <h5 className="card-title">
                                  <span
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Due Date:
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                  {moment
                                    .utc(item.dueDate)
                                    .format("MMM/DD/YYYY")}
                                </h5>
                                <h5 className="card-title">
                                  <span
                                    style={{
                                      color: "#ffa500",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    Paid:
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;
                                  {item.isPaid ? (
                                    <span
                                      style={{
                                        color: "green",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      Paid
                                    </span>
                                  ) : (
                                    <span
                                      style={{
                                        color: "red",
                                        fontWeight: "bold",
                                      }}
                                    >
                                      UnPaid
                                    </span>
                                  )}
                                </h5>
                              </div>
                              <div style={{ marginTop: "42%" }}>
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
                                      item.unitPrice,
                                      item.isPaid
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
                                        {data.address}, &nbsp;{data.city}
                                        ,&nbsp;
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
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp;
                                        {data.email}
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Previous Read: &nbsp;&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp;
                                        </span>
                                        {data.previousRead}
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Current Read: &nbsp;&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;
                                        </span>
                                        {data.currentRead}
                                        <br />
                                        <span style={{ fontWeight: "bold" }}>
                                          Unit Cost: &nbsp;&nbsp;&nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;
                                          &nbsp;&nbsp; &nbsp;
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
                                          Issue Date: &nbsp; &nbsp; &nbsp;
                                          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;
                                          &nbsp;
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
                                        onClick={() => {
                                          handlePayment(data.id);
                                        }}
                                      >
                                        Make Payment
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
        )}
      </div>
    </div>
  );
};

export default BillComponent;
