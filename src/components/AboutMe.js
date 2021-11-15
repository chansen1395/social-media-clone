import React from "react";
import PropTypes from "prop-types";

const description =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ";

function About(props) {
  return (
    <React.Fragment>
      <h2>About</h2>
      <p>{description}</p>
    </React.Fragment>
  );
}

About.propTypes = {
  description: PropTypes.string,
};

export default About;