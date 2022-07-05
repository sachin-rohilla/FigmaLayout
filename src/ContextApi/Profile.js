import React, { useContext } from "react";
import { Context } from "./Context";
const Profile = () => {
  const { name } = useContext(Context);
  return (
    <>
      <h1>Profile: {name}</h1>
    </>
  );
};

export default Profile;
