let initialState = {
  response: false,
  data: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERPROFILE":
      return {
        ...state,
        response: true,
        data: action.payload
      };
    case "EDIT_USERNAME":
      return {
        ...state,
        response: false,
        data: {
          ...state.data,
          username: action.payload
        } 
      };
    default:
      return state;
  }
};
  
export default userReducer;