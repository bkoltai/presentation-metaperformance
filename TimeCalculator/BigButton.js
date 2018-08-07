import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const BigButtonStyled = styled.button`
  background-color: #ceff7f;
  border-radius: 2rem;
  border: solid 2px;
  font-size: 2rem;
  text-transform: uppercase;
  padding: 10px;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  
  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.7);
    transform: scale(1.1);
  }
`
const BigButton = props => {
  return <BigButtonStyled {...props} />
}

BigButton.propTypes = {}

export default BigButton
