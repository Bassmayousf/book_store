import React from 'react';
import { useRef } from 'react';
import { insertBooks} from './store/BookSlice';
import { useDispatch,useSelector } from 'react-redux';
const Addform = () => {
  const isLoggedIn = useSelector((state)=>state.authReducer.isLoggedIn)
  const dispatch = useDispatch()
  const title = useRef(null)
  const price = useRef(null)
  const description = useRef(null)
  
  const hundleForm =(e)=>{
    e.preventDefault()
    const data ={
      title :title.current.value,
      price:price.current.value,
      description:description.current.value,
    }
    dispatch(insertBooks(data))
    title.current.value=null
    price.current.value=null
    description.current.value=null
  }


  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={hundleForm}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control'  ref={title} id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' ref={price} id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
            ref={description}
              className='form-control'
              id='Description'
              rows='3'
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={isLoggedIn}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
