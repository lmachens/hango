import React from "react";
import Avatar from "./Avatar";
import { useUser } from "../contexts/user";

function UserAvatar() {
  const user = useUser();

  const avatarImgSrc = user ? user.avatarImgSrc : undefined;

  return <Avatar imgSrc={avatarImgSrc} alt={user ? user.name : ""} />;
}

export default UserAvatar;
