import React from "react";
import ProfileName from "./ProfileName";
import ProfilePhoto from "./ProfilePhoto";

function Profile() {
  return (
    <React.Fragment>
      <ProfileName />
      <ProfilePhoto />
    </React.Fragment>
  );
}

export default Profile;