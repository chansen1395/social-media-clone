import React from "react";
// import PropTypes from "prop-types";


function HeaderSearch() {
  return (
    <React.Fragment>
      <label for="search">Search: </label>
      <input type="text" id="search" name="search" placeholder="ex: John Smith"></input>
    </React.Fragment>
  );
}

export default HeaderSearch;