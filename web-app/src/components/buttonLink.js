import React from "react";
import styled from "styled-components";

const StyledButton = styled.span`
  a {
    text-decoration: none;
    border-radius: 0;
    background-color: transparent;
    outline: 0;
    min-height: ${({size}) => size && size === 'large' ? '60px' : '30px'};
    &:hover {
      text-decoration: none;
    }
  }
`

export default function ButtonLink(props) {
  const { children, size } = props;
  return (
    <StyledButton size={size}>
      {children}
    </StyledButton>
  )
}