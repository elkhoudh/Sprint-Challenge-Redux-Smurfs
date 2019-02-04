import React from "react";
import { connect } from "react-redux";
import { populateForm, deleteSmurf } from "../../actions";
const Form = props => {
  const { smurfs, populateForm, deleteSmurf } = props;
  return (
    <div>
      {smurfs.map(smurf => {
        return (
          <div>
            <h1>{smurf.name}</h1>
            <p>{smurf.age}</p>
            <p>{smurf.height}</p>
            <button
              onClick={() =>
                populateForm(smurf.id, smurf.name, smurf.age, smurf.height)
              }
            >
              UPDATE
            </button>
            <button onClick={() => deleteSmurf(smurf.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { populateForm, deleteSmurf }
)(Form);
