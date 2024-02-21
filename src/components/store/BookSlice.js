import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { insertLogs } from "./reportSlice";
const initialState = { books: [], isLoading: false, error: null , bookinfo:null };


export const insertBooks = createAsyncThunk(
  "insert/insertBooks",
  async function (bookData, thunkApi) {
    const { rejectWithValue ,getState,dispatch} = thunkApi;

    try {
      dispatch(deleteBook({id:"dc32"}))

      const state =getState();
      // console.log(state.authReducer.name)
      bookData.name = state.authReducer.name;
      const response = await fetch("http://localhost:3005/books", {
        method: "POST",
        body: JSON.stringify(bookData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      dispatch(insertLogs({name:"isert book",status:"successful"}))
      const data = await response.json();
      return data;
    } catch (error) {
      dispatch(insertLogs({name:"isert book",status:"failed"}))

      rejectWithValue(error.message);
    }
  }
);
export const deleteBook = createAsyncThunk(
  "delete/deleteBook",
  async function (item, thunkApi) {
    const { rejectWithValue } = thunkApi;

    try {
    
       await fetch(`http://localhost:3005/books/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      return item;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const getRead = createAsyncThunk(
  "get/getRead",
  async function (item, thunkApi) {
    const { rejectWithValue } = thunkApi;

    try {
    
       await fetch(`http://localhost:3005/books/${item.id}`, {
        method: "GET",
        headers: {
          "Content-type":"application/json; charset=UTF-8",
        },
      });
      return item;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch("http://localhost:3005/books");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    });
    builder.addCase(getBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;

      console.log(action);
    });
    builder.addCase(getBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log(action);
    });
    builder.addCase(insertBooks.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    });
    builder.addCase(insertBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books.push(action.payload);

      console.log(action);
    });
    builder.addCase(insertBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log(action);
    });
    builder.addCase(deleteBook.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      console.log(action);
    });
    builder.addCase(deleteBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books=state.books.filter(el=>el.id !== action.payload.id)

      console.log(action);
    });
    builder.addCase(deleteBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;

      console.log(action);
    });
    builder.addCase(getRead.fulfilled, (state, action) => {
      state.isLoading = false;
      state.bookinfo = action.payload;

      console.log(action);
    });
  },
  
});
export const books = bookSlice.reducer
