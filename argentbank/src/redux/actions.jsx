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

export const userProfile = (userData) => {
  return {
    type: 'GET_USERPROFILE',
    payload: userData
  }
}