import React from "react";
import Avatar from "../components/Avatar";

export default {
  title: "Avatar"
};

export function WithImage() {
  return (
    <Avatar src="http://www.freakingnews.com/pictures/78500/Monkey-Business--78549.jpg" />
  );
}

export function NoImage() {
  return <Avatar />;
}
