import HomeComponent from "../Components/HomeComponent";
import "./App.css";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { logout, login, selectUser } from "../Components/redux/userSlice";
import { useSelector } from "react-redux";
import NavBarComponent from "../Components/NavBarComponent";

import LogInComponent from "../Components/LogInComponent";
import FooterComponent from "../Components/FooterComponent";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="App">
      {!user ? (
        <LogInComponent />
      ) : (
        <>
          <NavBarComponent />
          <HomeComponent />
          <FooterComponent />
        </>
      )}
    </div>
  );
}

export default App;
