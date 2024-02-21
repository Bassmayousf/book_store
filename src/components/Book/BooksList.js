import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../store/BookSlice";
import { getRead } from "../store/BookSlice";
const BooksList = ({ isLoading, books }) => {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.authReducer.isLoggedIn);

  const booklist =
    books && books.length > 0
      ? books.map((item) => {
          return (
            <li
              key={item.id}
              className="list-group-item d-flex  justify-content-between align-items-center"
            >
              <div>{item.title}</div>
              <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={()=>dispatch(getRead(item))} >
                  Read
                </button>
                <button
                  disabled={isLoggedin}
                  type="button"
                  className="btn btn-danger"
                  onClick={() =>
                    dispatch(deleteBook(item)).then((data) => {
                      console.log(data)
                      // do additional work
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })
      : "no avaliable books";

  return (
    <div>
      <h2>Books List</h2>
      {isLoading ? "loading..." : <ul className="list-group">{booklist}</ul>}
    </div>
  );
};

export default BooksList;
