import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_PROJECTS = 'GET_PROJECTS';
export const GETTING_PROJECTS = 'GETTING_PROJECTS';
export const CREATE_PROJECT = 'CREATE_PROJECT';
export const CREATING_PROJECT = 'CREATING_PROJECT';
export const UPDATE_PROJECT = 'UPDATE_PROJECT';
export const UPDATING_PROJECT = 'UPDATING_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';
export const DELETING_PROJECT = 'DELETING_PROJECT';
export const SINGLE_PROJECT = 'SINGLE_PROJECT';
export const TOGGLE_UPDATE_PROJECT = 'TOGGLE_UPDATE_PROJECT';
export const UPDATE_TARGET = 'UPDATE_TARGET';

const URL = 'http://localhost:5555/api/projects';

// get(): calling get returns an array of all the resources contained in the database. If you pass an id to this method it will return the resource with that id if one is found.
// GET
export const getProjects = () => {
  const projects = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({
      type: GETTING_PROJECTS
    });
    projects
      .then(response => {
        dispatch({
          type: GET_PROJECTS,
          payload: response.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};


// insert(): calling insert passing it a resource object will add it to the database and return the newly created resource.
// POST
export const createProject = project => {
  const newProject = axios.post(`${URL}/create`, project);
  return dispatch => {
    dispatch({
      type: CREATING_PROJECT
    });
    newProject
      .then(({
        data
      }) => {
        dispatch({
          type: CREATE_PROJECT,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};


// update(): accepts two arguments, the first is the id of the resource to update, and the second is an object with the changes to apply. It returns the updated resource. If a resource with the provided id is not found, the method returns null.
// ?? PUT ??
export const updateSingleProject = (project, id) => {
  return dispatch => {
    axios.put(URL + "/update/" + id, project)
      .then(response => {
        console.log(response)
        dispatch({
            type: UPDATE_TARGET,
            payload: response.data
          })
          
        })
        .catch(err => console.log(err.message))
  };
};

// remove(): the remove method accepts an id as it's first parameter and, upon successfully deleting the resource from the database, returns the number of records deleted.
// DELETE
export const deleteProject = id => {
  const deletedProject = axios.delete(`${URL}/delete`, {
    data: {
      id
    }
  });
  return dispatch => {
    dispatch({
      type: DELETING_PROJECT
    });
    deletedProject
      .then(({
        data
      }) => {
        dispatch({
          type: DELETE_PROJECT,
          payload: data
        });
        dispatch({
          type: SINGLE_PROJECT,
          payload: {}
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};
