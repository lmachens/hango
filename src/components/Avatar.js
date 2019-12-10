import React from "react";
import styled from "@emotion/styled";

const Img = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #e0e4e3;
`;

function Avatar({
  imgSrc = "https://www.kirkleescollege.ac.uk/wp-content/uploads/2015/09/default-avatar.png"
}) {
  return <Img src={imgSrc} />;
}

export default Avatar;
