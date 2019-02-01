/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from "axios";
import {
  GET_SMURFS_SUCCESS,
  LOADING_START,
  GET_SMURFS_ERROR,
  HANDLE_CHANGE,
  POPULATE_FORM
} from "../types/index";

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

export const getSmurfs = () => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_ERROR }));
};

export const addSmurfs = (name, age, height) => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .post("http://localhost:3333/smurfs", { name, age, height })
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_ERROR }));
};

export const handleChange = e => {
  return {
    type: HANDLE_CHANGE,
    e
  };
};

export const updateSmurf = (id, name, age, height) => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_ERROR }));
};

export const populateForm = (id, name, age, height) => {
  return {
    type: POPULATE_FORM,
    payload: {
      name,
      age,
      height,
      id
    }
  };
};

export const deleteSmurf = id => dispatch => {
  dispatch({ type: LOADING_START });
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data }))
    .catch(error => dispatch({ type: GET_SMURFS_ERROR }));
};
