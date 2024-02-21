import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
const BookInfo = () => {
  const info = useSelector((state)=>state.books.bookinfo)
  console.log(info)
  return (
    <Fragment>
      <h2>Book Details</h2>
      {info === null ?(<div className='alert alert-secondary' role='alert'>
        There is no books selected yet. Please select!
      </div>):(  <div>
        
        <p className='fw-bold'>Title:{info.title}</p>
        <p className='fw-light'>Description:{info.description}</p>
        <p className='fst-italic'>Price:{info.price}</p>
      </div>)}
      
    
    </Fragment>
  );
};

export default BookInfo;
