import {setUserData} from "../reducers/register";
const basePath = "https://backend/backend";//here you may use backend url

export const signupregister = (email, name, password,obj,arr) => async (dispatch) => {
  try {

    // console.log("email,name,password,obj,arr", email, name, password,obj,arr)
    dispatch(setUserData({userData:{email,name,password,obj,arr}}));
      // console.log("password")
    return {
      success: 'success',
    };
  } catch (err) {
    return {
      error: err,
    };
  }
};

