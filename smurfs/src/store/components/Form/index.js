import React from "react";
import { connect } from "react-redux";
import { handleChange, addSmurfs, updateSmurf } from "../../actions";

const Form = props => {
  const {
    updatingSmurf,
    error,
    name,
    age,
    height,
    handleChange,
    addSmurfs,
    updateSmurf,
    beingUpdated
  } = props;

  return (
    <form>
      <input value={name} onChange={handleChange} name="name" type="text" />
      <input value={age} onChange={handleChange} name="age" type="text" />
      <input value={height} onChange={handleChange} name="height" type="text" />
      <button
        onClick={e => {
          e.preventDefault();
          if (updatingSmurf) {
            updateSmurf(beingUpdated, name, age, height);
          } else {
            addSmurfs(name, age, height);
          }
        }}
      >
        {updatingSmurf ? "Update Smurf" : "Add Smurf"}
      </button>
      {error && (
        <small style={{ display: "block", color: "red" }}>{error}</small>
      )}
    </form>
  );
};

const mapStateToProps = state => ({
  name: state.name,
  age: state.age,
  height: state.height,
  error: state.error,
  updatingSmurf: state.updatingSmurf,
  beingUpdated: state.beingUpdated
});

export default connect(
  mapStateToProps,
  { handleChange, addSmurfs, updateSmurf }
)(Form);
