import React from "react";
import Notification from "../components/Notification";
import { action } from "@storybook/addon-actions";

export default {
  title: "Notification"
};

export function Repaid() {
  return (
    <Notification
      avatarSrc="http://www.freakingnews.com/pictures/78500/Monkey-Business--78549.jpg"
      title="Jon repaid you"
      subtitle="21min ago"
      side="$7.50"
      onClick={action("click")}
    />
  );
}

export function Requested() {
  return (
    <Notification
      title="Anna repaid you"
      subtitle="2h ago"
      side="$17.50"
      onClick={action("click")}
    />
  );
}
