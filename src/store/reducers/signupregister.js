import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  userData:null,
  
};

export const signupregister = createSlice({
  name: "signupregister",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      const { payload } = action;
      state.userData = payload.userData;
     
    },
  },
});

// Action creators are generated for each case reducer function
export const {setUserData} = signupregister.actions;

export default signupregister.reducer;
