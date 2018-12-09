import * as actionTypes from '../actions';

const initialState = {
  projectSelected: {},
  showUpdate: false
};

export const singleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SINGLE_PROJECT:
      return { ...state, projectSelected: action.payload, showUpdate: false };
    case actionTypes.TOGGLE_UPDATE_PROJECT:
      return { ...state, showUpdate: !state.showUpdate };
    default:
      return state;
  }
};
