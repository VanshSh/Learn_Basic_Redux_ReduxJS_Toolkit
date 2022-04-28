import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "./store";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

 
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth/>}
      {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
  );
}

export default App;
