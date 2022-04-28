
import { SET_LOADING_STATUS, SET_USER } from '../types/BlogActionsTypes';

export const setUserAction = payload => ({ 
  type: SET_USER,
 user: payload });

export const setLoading = status => ({
  type: SET_LOADING_STATUS,
  status: status
});

