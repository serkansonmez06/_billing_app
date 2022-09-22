import React, { useState, useRef } from "react";
import axios from "axios";
import { auth } from "../firebase";
import LogInComponent from "./LogInComponent";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const SignUpComponent = () => {
  const [signIn, setSignIn] = useState(false);
  const [user, setUser] = useState({
    id: "",
    email: "",
    password: "",
  });
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = () => {
    // console.log("register");

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        // console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleOnChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });

    //console.log("i", e.target.value);
  };

  const saveUserToDB = async () => {
    await axios
      .post("http://localhost:8181/saveUser", user)
      .then((response) => {
        setUser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      {signIn ? (
        <LogInComponent />
      ) : (
        <MDBContainer className="my-5">
          <MDBCard>
            <MDBRow className="g-0">
              <MDBCol md="6">
                <MDBCardImage
                  src="https://images.unsplash.com/photo-1602918955248-d1bbfcbfae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="login form"
                  className="rounded-start w-100"
                />
              </MDBCol>

              <MDBCol md="6">
                <MDBCardBody className="d-flex flex-column">
                  <div
                    className="d-flex flex-row mt-2"
                    style={{ marginLeft: "42%" }}
                  >
                    <MDBIcon fas style={{ color: "#ff6219" }} />

                    <span className="h1 fw-bold mb-0">E-Bill</span>
                  </div>

                  <h5
                    className="fw-normal my-4 pb-3"
                    style={{ letterSpacing: "1px" }}
                  >
                    Create New Account
                  </h5>

                  <div className="">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      onChange={handleOnChange}
                      type="email"
                      name="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div>
                    <label
                      className="form-label"
                      htmlFor="exampleInputEmail1-2"
                    >
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      onChange={handleOnChange}
                      type="password"
                      name="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    style={{ marginTop: "5%" }}
                    onClick={() => {
                      register();
                      setSignIn(true);
                      saveUserToDB();
                    }}
                  >
                    Create Account
                  </MDBBtn>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      )}
    </div>
  );
};

export default SignUpComponent;
