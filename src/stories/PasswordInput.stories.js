import React from "react";
import PasswordInput from "../components/PasswordInput";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Password Input",
  decorators: [withKnobs]
};

export function Controlled() {
  return (
    <PasswordInput value={text("value", "")} onChange={action("change")} />
  );
}

export function Weak() {
  return <PasswordInput value="pw" />;
}

export function Multiple() {
  return (
    <>
      <PasswordInput value="" onChange={action("change")} />
      <PasswordInput value="pw" onChange={action("change")} />
      <PasswordInput value="pass" onChange={action("change")} />
      <PasswordInput value="password" onChange={action("change")} />
      <PasswordInput value="passwordOver" onChange={action("change")} />
      <PasswordInput value="passwordOver9000" onChange={action("change")} />
    </>
  );
}
