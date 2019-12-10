import React from "react";
import styled from "@emotion/styled";
import Avatar from "./Avatar";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 2px 2px 5px #111;
  border-radius: 10px;
  min-height: 100px;
  min-width: 300px;
`;

function Notification({ avatarSrc, title, subtitle, side, onClick }) {
  return (
    <Div onClick={onClick}>
      <Avatar src={avatarSrc} />
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
      <div>{side}</div>
    </Div>
  );
}

export default Notification;
