import React from "react";
import PropTypes from "prop-types";
import FriendPhoto from "./FriendPhoto";

function FriendFeed(props){
  return (
    <React.Fragment>
      <div class="container">
        <div class="friend-img">
          <FriendPhoto />
        </div>
        <div class="friend-txt">
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