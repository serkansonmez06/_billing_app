import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import axios from "axios";
const BillComponent = () => {
  const [invoice, setInvoice] = useState([]);
  const navigate = useNavigate();
  const getInvoices = async () => {
    await axios
      .get("http://localhost:8181/invoices")
      .then((response) => {
        setInvoice(response.data);
        // console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  const handleAddNavigate = () => {
    console.log("add");
    navigate("/newaccount");
  };
  const handleDisplayPage = () => {
    console.log("billl");
    navigate("/display");
  };
  useEffect(() => {
    getInvoices();
  }, []);
  return (
    <div className="vh-100">
      <div style={{ marginBottom: "20px", marginTop: "30px" }}>
        <button
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
          type="button"
          data-toggle="tooltip"
          title="Create New Account"
          className="btn btn-outline-info"
          onClick={handleAddNavigate}
        >
          <i className="fa-solid fa-circle-plus"></i> Create New Account
        </button>
      </div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Customer Id</th>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Date</th>
            <th scope="col">#</th>
          </tr>
        </thead>
        <tbody>
          {invoice.map((item, key) => (
            <tr key={key}>
              <td>{item.customerId}</td>
              <td>{item.name}</td>
              <td>${item.amount.toFixed(2)}</td>
              <td> {moment.utc(item.issueDate).format("MM/DD/YYYY")}</td>
              <td>
                <button className="btn btn-light" onClick={handleDisplayPage}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillComponent;
