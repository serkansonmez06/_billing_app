import { useRef, useState } from "react";
import { auth } from "../firebase";
import SignUpComponent from "./SignUpComponent";
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

const LogInComponent = () => {
  const [signInLog, setSignInLog] = useState(false);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    console.log("signIn");
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {signInLog ? (
        <SignUpComponent />
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
                    Sign into your account
                  </h5>

                  <div className="">
                    <label className="form-label" htmlFor="typeEmailX-2">
                      Email
                    </label>
                    <input
                      ref={emailRef}
                      type="email"
                      id="typeEmailX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <div>
                    <label className="form-label" htmlFor="typePasswordX-2">
                      Password
                    </label>
                    <input
                      ref={passwordRef}
                      type="password"
                      id="typePasswordX-2"
                      className="form-control form-control-lg"
                    />
                  </div>

                  <MDBBtn
                    className="mb-4 px-5"
                    color="dark"
                    size="lg"
                    onClick={signIn}
                    style={{ marginTop: "5%" }}
                  >
                    Login
                  </MDBBtn>

                  <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                    Don't have an account?&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      className="btn btn-success"
                      style={{ color: "white" }}
                      onClick={() => {
                        setSignInLog(true);
                      }}
                    >
                      Register here
                    </button>
                  </p>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBContainer>
      )}
    </div>
  );
};

export default LogInComponent;
