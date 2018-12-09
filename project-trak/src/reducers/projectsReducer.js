import * as actionTypes from '../actions';

const initialState = {
  projects: [],
  gettingProjects: false,
  updatingProject: false,
  creatingProject: false,
  deletingProject: false,
  isHidden: false,
  error: null
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_PROJECTS:
      return { ...state, gettingProjects: true };
    case actionTypes.GET_PROJECTS:
      return { ...state, projects: action.payload, gettingProjects: false };
    case actionTypes.UPDATING_PROJECT:
      return { ...state, updatingProject: true };
    case actionTypes.UPDATE_PROJECT:
      return { ...state, projects: action.payload, updatingProject: false };
    case actionTypes.DELETING_PROJECT:
      return { ...state, deletingProject: true };
    case actionTypes.DELETE_PROJECT:
      return { ...state, projects: action.payload, deletingProject: false };
    case actionTypes.CREATING_PROJECT:
      return { ...state, creatingProject: true };
    case actionTypes.CREATE_PROJECT:
      return { ...state, projects: action.payload, creatingProject: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingProjects: false,
        creatingProject: false,
        deletingProject: false,
        updatingProject: false,
        error: action.payload
      };
    case actionTypes.UPDATE_TARGET:
        return {
          ...state, projects: action.payload
        }
    default:
      return state;
  }
};

