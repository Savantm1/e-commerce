import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0.5rem 1rem;
  width: ${(props) => props.width || "auto"};
  font-weight: 700;
  border-radius: 12px;
  border: ${(props) => props.border || "2px solid #46760A"};
  background-color: ${(props) => props.bg || "#6A983C"};
  color: ${(props) => props.cl || "white"};
  outline: none;
  margin-right: ${(props) => props.mr || "0px"};
`;

const Button = (props) => {
  return (
    <StyledButton {...props} value={props.value}>
      {props.value}
    </StyledButton>
  );
};

export default Button;
