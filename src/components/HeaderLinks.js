import React from "react";
import PropTypes from "prop-types";

function HeaderLinks(props){
  return (
    <React.Fragment>
      <button class="btn btn-primary">{props.link}</button>
    </React.Fragment>
  )
}

HeaderLinks.propTypes = {
  link: PropTypes.string.isRequired
};

export default HeaderLinks;
// return (
//   <React.Fragment>
//     <hr/>
//     {mainFeed.map((friendFeed, index) =>
//       <FriendFeed 
//         name={friendFeed.name}
//         update={friendFeed.update}
//         key={index}/>
//     )}
//   </React.Fragment>
// );