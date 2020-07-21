import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { IconMother } from './Icon'
import '../fonts/inter-ui.css'

import TMDB from '../assets/TMDB.svg'

const GlobalStyle = createGlobalStyle`
:root {
  --bg-dark: #172742;
  --bg-light: #47524f;
  --primary: #581b98;
  --secondary: #61ebe3;
  --black: #0c111f;
  --blue: #00d6dd;
  --white: #fdfdfd;
  --grey: #9fb7c7;
  --grey-light: #cae5f5;
  --br: 5px;
  --br-big: 10px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

html {
  font-family: 'Inter UI', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif; 
  text-rendering: optimizeLegibility;
  box-sizing: border-box;
  -ms-overflow-style: scrollbar;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 18px;
  @media (max-width: 600px) {
    font-size: 16px;
  }
}

body {
  color: var(--black);
  background: var(--white);
  margin: 0;
  padding: 0;
  min-height: 100vh;
  /* Hide scroll bar */
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
  scrollbar-width: none;
}

/* Safari and Chrome Hide scroll bar */
body::-webkit-scrollbar {
  display: none;
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.17rem;
}

::selection {
  color: var(--white);
  background-color: var(--primary);
}

a {
  color: var(--secondary);
  transition: all 0.5s ease-in-out;
  text-decoration: none;
  &:hover, &:focus {
    color: var(--primary);
    cursor: pointer;
  }
}

.hidden {
  display: none !important;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}

@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0)
  }
  20%,
  60% {
    transform: rotate(-25deg)
  }
  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width: 500px) {
  .github-corner:hover .octo-arm {
    animation: none;
  }
  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}
`

const Footer = styled.footer`
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  color: var(--grey);
  background-color: var(--black);
  [data-size='small'] {
    font-size: 0.8rem;
  }
`

export default class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <>
        <GlobalStyle />
        <a
          href="https://github.com/GuilleHM/vh"
          target="_blank"
          rel="noopener noreferrer"
          className="github-corner"
          aria-label="View source on GitHub"
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 250 250"
            style={{
              fill: 'var(--primary)',
              color: 'var(--white)',
              position: 'absolute',
              top: 0,
              border: 0,
              right: 0,
            }}
            aria-hidden="true"
          >
            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z" />
            <path
              d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
              fill="currentColor"
              style={{ transformOrigin: '130px 106px' }}
              className="octo-arm"
            />
            <path
              d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
              fill="currentColor"
              className="octo-body"
            />
          </svg>
        </a>
        {children}
        <Footer>
          <p>
            Made by{' '}
            <a
              href="https://www.guillehm.ml"
              style={{ color: 'var(--white)' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GuilleHM
            </a>
          </p>
          <p data-size="small">
            Powered by{' '}
            <object
              type="image/svg+xml"
              data={TMDB}
              alt="The Movie DataBase Icon"
              className="project-img"
              aria-label="project"
              style={{ display: 'inline-block', width: '1.5rem' }}
            />
          </p>
        </Footer>
        <IconMother />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}
