import React from "react";
import PropTypes from "prop-types";

const friendsSoonToBe = [
  {
    name: 'Prison Mike',
    status: '10 years max.'
  },
  {
    name: 'Magic Mike',
    status: 'Lady killer.'
  }
];

function FriendSuggestion(props){
  return (
    <React.Fragment>
      {/* <h4>{props.name}</h4>
      <img src="https://static.wikia.nocookie.net/disney/images/f/fc/Channing_Tatum.jpg/revision/latest?cb=20191019170149" alt="magic_mike" width="200" height="300">
      <h4>Magic Mike</h4>
      <br />
      <img src="https://static.wikia.nocookie.net/disney/images/f/fc/Channing_Tatum.jpg/revision/latest?cb=20191019170149" alt="prison_mike" width="200" height="300">
      <br />
      <h4>Magic Mike</h4> */}
      <h4>Magic Mike</h4>
      <button class="btn btn-dark">Follow</button>
      <h4>Prison Mike</h4>
      <button class="btn btn-dark">Follow</button>
    </React.Fragment>
  )
}

export default FriendSuggestion;
