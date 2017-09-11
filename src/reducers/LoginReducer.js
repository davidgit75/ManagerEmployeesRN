import { ACTIONS } from '../Actions';

export default (state = false, action) => {
  const { type, payload } = action;
  switch(type) {
    case ACTIONS.SET_LOGIN:
      return payload;
    default:
      return state;
  }
};