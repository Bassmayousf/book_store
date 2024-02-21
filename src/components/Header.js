import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Fragment } from "react";
import { LoggedOut } from "./store/authSlice";
const Header = () => {
  const dispatch = useDispatch()
  const isLoggedin = useSelector((state)=>state.authReducer.isLoggedIn)

  const books = useSelector((state) => state.books);

  const error = books.error;
  return (
    <Fragment>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1">My Books</span>

        <button className="btn btn-outline-primary" type="submit" onClick={()=>{dispatch(LoggedOut())}}>
          {isLoggedin?"Log in":"Log out"}
        </button>
      </nav>
    </Fragment>
  );
};

export default Header;
