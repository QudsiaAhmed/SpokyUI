import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  userData:null,
  
};

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { payload } = action;
      state.userData = payload.userData;
     
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData} = registerSlice.actions;

export default registerSlice.reducer;
