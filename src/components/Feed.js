import React from "react";
import FriendFeed from "./FriendFeed";
import FriendPhoto from "./FriendPhoto";


// array of status updates
const mainFeed = [
  {
    name: 'Bobby',
    update: 'Got a new job.'
  },
  {
    name: 'Dennis',
    update: 'Got a baby.'
  },
  {
    name: 'Karen',
    update: 'Went on vacation.'
  },
  {
    name: 'Karen II',
    update: 'The sequel to Karen.'
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