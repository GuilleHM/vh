import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.svg`
  width: 1.25rem;
  height: 1.25rem;
  fill: var(--black);
  @media screen and (max-width: 400px) {
    width: 0.9rem;
    height: 0.9rem;
  }
`

// The "focusable" and "aria-hidden" properties are important for screen readers. Icons should be hidden for them if they're only a styling element and are a duplication of content
export const Icon = ({ name, hidden }) => (
  <Wrapper
    iconName={name}
    data-name={name}
    data-item="custom-icon"
    focusable={hidden ? 'false' : null}
    aria-hidden={hidden ? 'true' : null}
  >
    <use xlinkHref={`#${name}`} />
  </Wrapper>
)

Icon.propTypes = {
  name: PropTypes.oneOf(['first', 'star']).isRequired,
  hidden: PropTypes.bool,
}

Icon.defaultProps = {
  hidden: true,
}

export const IconMother = () => (
  <svg version="1.1" xlmns="http://www.w3.org/2000/svg" className="hidden" aria-hidden="true" focusable="false">
    <defs>
      <symbol id="first" viewBox="5 5 90 90">
        <g transform="translate(0,-952.36218)">
          <path d="m 6.1593998,1015.0901 7.7782002,7.7782 c 4.2958,-4.2957 11.2607,-4.2957 15.5564,0 4.2958,4.2958 4.2957,11.2606 0,15.5563 l 7.7782,7.7782 37.4766,-37.4766 -5.6568,-5.6569 2.8283,-2.8284 5.6569,5.6568 16.2634,-16.26344 -7.7782,-7.77818 c -4.2957,4.29575 -11.2605,4.29582 -15.5563,0 -4.2957,-4.29567 -4.2958,-11.2606 0,-15.55635 l -7.7782,-7.77817 -16.2634,16.26345 5.6568,5.65686 -2.8284,2.82843 -5.6569,-5.65686 -37.4766002,37.47666 z M 34.4436,998.11954 l 9.2366,3.93326 7.6899,-6.80588 -1.0827,10.09838 8.6619,5.0382 -9.9216,2.3201 -2.3201,9.9216 -5.0382,-8.662 -10.0983,1.0827 6.8058,-7.6898 -3.9333,-9.23656 z m 17.6777,-12.02082 2.8284,-2.82842 5.6569,5.65685 -2.8284,2.82843 -5.6569,-5.65686 z m 8.4853,8.48528 2.8284,-2.82842 5.6569,5.65685 -2.8284,2.82847 -5.6569,-5.6569 z" />
        </g>
      </symbol>
      <symbol id="star" viewBox="7 20 837 805">
        <path d="M539 297c387,3 383,-10 72,220 121,384 140,370 -188,136 -327,234 -309,248 -187,-136 -311,-230 -315,-217 72,-220 119,-359 111,-359 231,0z" />
      </symbol>
    </defs>
  </svg>
)
