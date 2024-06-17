let initialState = {
  data: {}
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERPROFILE":
      return {
        ...state,
        data: action.payload
      };
    case "EDIT_USERNAME":
      return {
        ...state,
        data: {
          ...state.data,
          userName: action.payload
        } 
      };
    default:
      return state;
  }
};
  
export default userReducer;