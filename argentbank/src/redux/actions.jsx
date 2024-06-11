// Auth actions

export const loginAction = (token) => {
  return {
    type: 'LOGIN',
    payload: token
  }
};
  
export const logoutAction = () => {
  return {
    type: 'LOGOUT'
  }
};

// User actions

export const userProfile = (userData) => {
  return {
    type: 'GET_USERPROFILE',
    payload: userData
  }
}

export const updateUsername = (userName) => {
  return {
    type: 'EDIT_USERNAME',
    payload: userName
  }
}