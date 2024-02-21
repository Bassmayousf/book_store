import React, { Fragment, useEffect } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';

import './book.css';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../store/BookSlice';

const PostContainer = () => {
  const books= useSelector((state)=>state.books)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getBooks())
  },[dispatch])

  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList isLoading={books.isLoading} books={books.books} />
        </div>
        <div className='col side-line'>
          <BookInfo />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
