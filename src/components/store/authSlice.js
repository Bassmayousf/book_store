import { createSlice } from "@reduxjs/toolkit";

const initialState ={isLoggedIn:false, name:'bassma yousef'}

const authSlice=createSlice({
  name:"auth",
  initialState,
  reducers:{
    LoggedOut :(state)=>{
      state.isLoggedIn = !state.isLoggedIn
    }
  }
  })

  export const authReducer = authSlice.reducer
export const {LoggedOut}= authSlice.actions
