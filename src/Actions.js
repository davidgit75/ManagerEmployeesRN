export const ACTIONS = {
  SET_LOGIN: 'SET_LOGIN'
};

export const setLogin = login => ({
  type: ACTIONS.SET_LOGIN,
  payload: login 
});