import { createSlice } from "@reduxjs/toolkit";
const reportSlice = createSlice({
  name:"report",
  initialState:{detials:[]},
  reducers :{
    insertLogs:(state,action)=>{
     state.detials.push(action.payload)
    }
  }
})
export const {insertLogs} = reportSlice.actions
export default reportSlice.reducer