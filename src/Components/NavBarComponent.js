import React from "react";
import { useSelector } from "react-redux";
import { auth } from "../firebase";
import { selectUser } from "./redux/userSlice";
import { useNavigate } from "react-router-dom";
function NavBarComponent() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();

  const handleSignOut = () => {
    auth.signOut();
    console.log("sign out");
    navigate("/");
  };
  return (
    <div>
      NavBarComponent
      <button onClick={handleSignOut} className="btn btn-danger">
        Sign out
      </button>
    </div>
  );
}

export default NavBarComponent;
