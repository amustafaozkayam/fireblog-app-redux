import { FETCH_ALL_BLOGS, FETCH_BLOG } from '../types/BlogActionsTypes';

const initialState = {
  blogData: [],
  blog: null
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_BLOGS:
      return {
        ...state,
        blogData: action.payload
      };
    case FETCH_BLOG:
      return {
        ...state,
        blog: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
