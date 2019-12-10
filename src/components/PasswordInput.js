import React from "react";
import styled from "@emotion/styled";

function calculateHue(length) {
  return Math.min(length * 10, 100);
}

const Input = styled.input`
  background: hsl(${props => calculateHue(props.value.length)}, 60%, 60%);
`;

function PasswordInput({ value, onChange }) {
  return <Input type="password" value={value} onChange={onChange} />;
}

export default PasswordInput;
