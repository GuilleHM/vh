import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const BackStyle = styled(Link)`
  color: var(--black);
  position: absolute;
  top: 1rem;
  left: 1rem;
  @media (min-width: 600px) {
    top: 2rem;
    left: 2rem;
  }
  padding: 0.5rem 0.75rem;
  background: var(--grey);
  border-radius: var(--br);
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--black);
    background-color: var(--secondary);
    transform: translateX(-0.5rem);
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const Back = () => <BackStyle to="/">Back to Overview</BackStyle>

export default Back
