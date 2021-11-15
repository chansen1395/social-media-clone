import React from "react";
import FriendFeed from "./FriendFeed";
import FriendPhoto from "./FriendPhoto";


// array of status updates
const mainFeed = [
  {
    name: 'Bobby',
    update: 'This is Bobby.'
  },
  {
    name: 'Dennis',
    update: 'This is Dennis.'
  },
  {
    name: 'Karen',
    update: 'This is Karen.'
  }
];

function Feed(){
  return (
    <React.Fragment>
      <hr/>
      {mainFeed.map((friendFeed, index) =>
        <FriendFeed 
          name={friendFeed.name}
          update={friendFeed.update}
          key={index}/>
      )}

    </React.Fragment>
  );
}

export default Feed;