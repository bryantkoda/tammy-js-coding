import React from "react";
import styled from "styled-components";

const StyledLabel = styled.div`
  font-size: 15px;
  margin: 20px auto;
  & > span {
    font-weight: 500;
  }
`
const StyledError = styled.span`
  color: red;
  font-weight: 700;
  margin-right: 10px;
`

const StyledCorrect = styled.span`
  color: green;
  font-weight: 700;
  margin-right: 10px;
`

export default function Label(props) {
  const { text, showError, remarks } = props
  return (
    <StyledLabel>
      {showError ? (
        <StyledError>
           Correct Answer: {remarks}
        </StyledError>
      ) : (
        <StyledCorrect>
          Correct Answer: {remarks}
        </StyledCorrect>
      )}
      <span dangerouslySetInnerHTML={{__html: text}} />
    </StyledLabel>
  )
}