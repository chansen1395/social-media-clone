import React from "react";
import HeaderSearch from "./HeaderSearch";
import HeaderLinks from "./HeaderLinks";

const mainLinks = [
  {
    link: 'Twitter'
  },
  {
    link: 'LinkedIn'
  },
  {
    link: 'Facebook'
  }
];

function Header(){
  return (
    <React.Fragment>
      <h2>Welcome to Head-Scroll</h2>
       {mainLinks.map((headerLinks, index) =>
         <HeaderLinks 
           link={headerLinks.link}
           key={index}/>
      )}
      <HeaderSearch />
    </React.Fragment>
  );
}


export default Header;