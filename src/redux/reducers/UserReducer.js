import { SET_LOADING_STATUS, SET_USER } from '../types/BlogActionsTypes';

const INITIAL_STATE = {
  user: null,
  loading: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case SET_LOADING_STATUS:
      return {
        ...state,
        loading: action.status
      };
    default:
      return state;
  }
};

export default userReducer;
