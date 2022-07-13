import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 20px 40px;
  height: 50px;
  line-height: 10px;
  outline: 0;
  border: 1px solid #000;
`

export default function Button(props) {
  const { text, onClick } = props
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  )
}