import React from "react";
import PropTypes from "prop-types";

function FriendSuggestion(props){
  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <button class="btn btn-dark">Follow</button>
    </React.Fragment>
  )
}

export default FriendSuggestion;