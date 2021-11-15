import React from "react";
import PropTypes from "prop-types";
import FriendPhoto from "./FriendPhoto";
import '../App.css';

function FriendFeed(props){
  return (
    <React.Fragment>
      <p>
          <FriendPhoto />
          <h3>{props.name}</h3>
          <p>{props.update}</p>
      </p>
      <hr/>
      <br />
    </React.Fragment>
  );
}

FriendFeed.propTypes = {
  name: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired
};

export default FriendFeed;