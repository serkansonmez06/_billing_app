import React from "react";
import { Link } from "react-router-dom";
const FooterComponent = () => {
  const linkStyle = { color: "white", textDecoration: "none" };
  const styleFooter = {
    minHeight: "100px",
    // left: 0,
    // right: 0,
    // bottom: 0,
    width: "100%",
    backgroundColor: "#93b4c7",
    color: "white",
    textAlign: "center",
    zIndex: 5,
    marginTop: "-8px",
    padding: "10px",
  };
  return (
    <div>
      <div style={styleFooter} className="position-sticky-bottom">
        <div
          className="d-flex justify-content-between"
          style={{ width: "20%", marginLeft: "40%" }}
        >
          <a
            className="btn-floating btn-sm btn-li mx-1"
            href="https://www.facebook.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111398.png"
              alt="facebook"
              height={"30px"}
            />
          </a>
          <a
            className="btn-floating btn-sm btn-li mx-1"
            href="https://www.twitter.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111688.png"
              alt="twitter"
              height={"30px"}
            />
          </a>
          <a
            className="btn-floating btn-sm btn-li mx-1"
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="instagram"
              height={"30px"}
            />
          </a>
          <a
            className="btn-floating btn-sm btn-li mx-1"
            href="https://www.youtube.com"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111748.png"
              alt="youtube"
              height={"30px"}
            />
          </a>
        </div>
        <br />
        <div>
          <Link
            to="/contact"
            style={linkStyle}
            data-toggle="tooltip"
            title="Contact US"
          >
            <span style={{ textDecoration: "underline" }}> Contact Us</span>
          </Link>
        </div>
        <br />

        <p> &copy; {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </div>
  );
};

export default FooterComponent;
