import React from "react";

function DashboardComponent() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#E5FBC9",
          marginTop: "0%",
        }}
      >
        <div>
          <div
            className="d-flex justify-content-start mr-5 "
            style={{ height: "70px" }}
          ></div>
          <div className=" mt-2 mb-5" style={{ position: "relative" }}>
            <img
              src="https://images.unsplash.com/photo-1576615039667-c7a34b96f505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="bookonTable"
              style={{
                //objectFit: "cover",
                objectFit: "fill",
                width: "80%",
                height: "350px",
                boxShadow: "22px 22px 25px #b37924",
              }}
              className="rounded"
            />
            <div
              className="text-justify"
              style={{
                position: "absolute",
                top: "13%",
                left: "50%",
                fontFamily: "Times",
                fontStyle: "italic",
                fontWeight: "bold",
                height: "30%",
                width: "30%",
                color: "white",
              }}
            >
              Your utilities are there to serve you. It shouldn’t be the other
              way around. A myriad of complexities, regulations, utility
              providers, and tenants make it difficult – and extremely costly –
              for your staff to keep up with commercial bill payments and
              management. There is a better alternative. Partner with with us
              for the management of your commercial and residential bill pay and
              utilities. We combine more than 20 years of experience with
              advanced data and analytics solutions to help commercial and
              residential property owners avoid late fees, reduce costs, and
              identify areas for energy savings. All while maintaining complete
              transparency.
            </div>
            <div
              style={{
                position: "absolute",
                top: "10%",
                left: "15%",
                fontFamily: "Times",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1488229297570-58520851e868?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
                alt="bookonTable"
                style={{
                  //objectFit: "cover",
                  objectFit: "fill",
                  width: "100%",
                  height: "250px",
                  boxShadow: "22px 22px 25px #FBFAF2",
                }}
                className="rounded"
              />
            </div>
          </div>

          <div className="container mb-5 ">
            <div className="row">
              <div
                className="col-sm border-none  "
                style={{
                  fontFamily: "Brush Script MT",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              >
                <i class="fa-solid fa-money-bill-wheat"></i> Ways to Pay
              </div>
              <div
                className="col-sm border-none"
                style={{
                  fontFamily: "Brush Script MT",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <i class="fa-sharp fa-solid fa-file-invoice-dollar"></i>
                Efficiency
              </div>
              <div
                className="col-sm border-none"
                style={{
                  fontFamily: "Brush Script MT",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <i class="fa-sharp fa-solid fa-envelopes-bulk"></i> Bill
                Delivery Options
              </div>
              <div
                className="col-sm border-none"
                style={{
                  fontFamily: "Brush Script MT",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                <i className="fa-solid fa-magnifying-glass"></i> Help Making
                Payments
              </div>
            </div>
            <div
              className="card card-body ml-5 text-justify"
              style={{ backgroundColor: "#E5FBC9", marginTop: "20px" }}
            >
              <span
                style={{
                  backgroundColor: "#E5FBC9",
                  fontFamily: "Brush Script MT",
                  fontWeight: "bold",
                  fontSize: "25px",
                }}
              >
                ABOUT US
              </span>
              <span
                style={{
                  backgroundColor: "#E5FBC9",
                  fontFamily: "papyrus",
                  fontSize: "25px",
                }}
              >
                My-Bill is a online electicity bill company, help users to pay
                their bill online. My-bill was launched in 2022.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardComponent;
