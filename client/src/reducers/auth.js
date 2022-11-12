import { AUTH, LOGOUT } from "../contants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  if (action.type === AUTH) {
    localStorage.setItem("profile", JSON.stringify({ ...action?.data }));
    // console.log(action?.data);
    return { ...state, authData: action?.data };
  }

  if (action.type === LOGOUT) {
    localStorage.removeItem("profile");
  }

  return state;
};

export default authReducer;
