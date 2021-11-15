import React from "react";
import PropTypes from "prop-types";
import FriendPhoto from "./FriendPhoto";
import '../App.css';

function FriendFeed(props){
  return (
    <React.Fragment>
      <div className="container">
        <div className="friend-img">
          <FriendPhoto />
        </div>
        <div className="friend-txt">
          <h3>{props.name}</h3>
          <p>{props.update}</p>
        </div>
      </div>
      <hr/>
    </React.Fragment>
  );
}

FriendFeed.propTypes = {
  name: PropTypes.string.isRequired,
  update: PropTypes.string.isRequired
};

export default FriendFeed;