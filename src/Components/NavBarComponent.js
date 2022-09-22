import React, { useState, useEffect } from "react";
import { Navbar, Collapse, Nav, NavbarText } from "reactstrap";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "./redux/userSlice";
import { useNavigate, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

const NavBarComponent = () => {
  const user = useSelector(selectUser);
  const [adminEmailDB, setAdminEmailDb] = useState({ email: "" });
  const navigate = useNavigate();

  const linkStyle = { color: "white", textDecoration: "none" };

  const handleSignOut = () => {
    auth.signOut();
    console.log("sign out");
    navigate("/");
  };

  const getAdmin = async () => {
    await axios
      .get("http://localhost:8181/admin")
      .then((response) => {
        setAdminEmailDb({ email: response.data.at(-1) });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAdmin();
  }, []);
  return (
    <div>
      <Navbar color="danger" expand="md" light id="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2779/2779262.png"
          alt="favicon"
          height="40px"
          width="30px"
        />

        <NavbarText style={{ color: "white" }}>
          <Link
            to="/"
            style={linkStyle}
            data-toggle="tooltip"
            title="Home of the book"
          >
            &nbsp; Home &nbsp;&nbsp;
          </Link>
        </NavbarText>
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavbarText
              style={{
                color: "white",
                marginRight: "5px",
              }}
            >
              <Link
                to="/search"
                style={linkStyle}
                data-toggle="tooltip"
                title="Search any books"
              >
                | &nbsp;&nbsp; My-Bill &nbsp;&nbsp;
              </Link>

              {user.email === adminEmailDB.email.email ? (
                <Link
                  to="/users"
                  style={{ color: "white", textDecoration: "none" }}
                  data-toggle="tooltip"
                  title="Admin info"
                >
                  |&nbsp;&nbsp; Users &nbsp; &nbsp;&nbsp;
                </Link>
              ) : (
                <Link
                  to="/"
                  style={{ color: "white", textDecoration: "none" }}
                  data-toggle="tooltip"
                  title="Admin info"
                >
                  &nbsp;&nbsp;&nbsp;
                </Link>
              )}
            </NavbarText>
            {/* <NavbarText style={{ color: "white" }}>
              <Link
                to="notes"
                style={linkStyle}
                data-toggle="tooltip"
                title="Create new note"
              >
                | &nbsp;&nbsp; Notes &nbsp;&nbsp;
              </Link>
            </NavbarText> */}
          </Nav>
          <NavbarText>
            <span
              style={{
                color: "orange",
                fontSize: "10px",
                marginLeft: "140px",
              }}
            ></span>
            <br />

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                H
                <span style={{ textTransform: "lowercase" }}>
                  i! {user.email}
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={handleSignOut}>Sign Out</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBarComponent;
