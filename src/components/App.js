import React from "react";
import '../App.css';
import Header from "./Header";
import Profile from "./Profile";
import About from "./AboutMe";
import Feed from "./Feed";
import FriendSuggestion from "./FriendSuggestion";
import Grid from "./Grid";



function App(){
  return ( 
    <React.Fragment>
      <Header />
      <Profile />
      <About />
      <Feed />
      <FriendSuggestion />

    <div className="App">
      <Grid />
    </div>

    </React.Fragment>
  );
}

export default App;
