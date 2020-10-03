import { GET_CONTACTS } from "../actions/types";
const initialState = {};
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
      };
    default:
      return state;
  }
};
