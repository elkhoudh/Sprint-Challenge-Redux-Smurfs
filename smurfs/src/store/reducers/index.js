/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  HANDLE_CHANGE,
  GET_SMURFS_SUCCESS,
  LOADING_START,
  GET_SMURFS_ERROR,
  POPULATE_FORM
} from "../types";

/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null,
  name: "",
  age: "",
  height: "",
  beingUpdated: ""
};

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.

  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        name: "",
        age: "",
        height: "",
        updateSmurf: false
      };

    case LOADING_START:
      return {
        ...state,
        fetchingSmurfs: true
      };

    case GET_SMURFS_ERROR:
      return {
        ...state,
        fetchingSmurfs: false,
        error: "ERROR COMMUNICATING WITH API"
      };

    case HANDLE_CHANGE:
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };

    case POPULATE_FORM:
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height,
        beingUpdated: action.payload.id,
        updatingSmurf: true
      };
    default:
      return state;
  }
};

export default reducer;
