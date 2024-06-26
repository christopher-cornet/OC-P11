let initialState = {
  isLoggedIn: !!localStorage.getItem("token"),
  token: localStorage.getItem("token") || ""
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload
      };
    case "LOGOUT":
      return {
        ...state,
        isLoggedIn: false,
        token: ""
      };
    default:
      return state;
  }
};
  
export default authReducer;