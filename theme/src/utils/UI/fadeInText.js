import React, { useState, useEffect, createElement } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from "styled-components"

import { media } from '../../utils/styles'

const isSSR = typeof window === 'undefined'

const Span = styled.span`
	transition: opacity .5s ease-in-out;

	${({ time, initialOpacity }) => css`
		transition-delay: ${time}s;
		opacity: ${!time ? initialOpacity : 1};
	`};
`

const Wrapper = styled.div`
  display: inline-block;

  ${media.phone(css`
    display: block;
  `)}
`

const Letter = ({ letter, duration, initialOpacity }) => {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const addDec = int => parseFloat(int.toFixed(1))
    const random = max => Math.random() * (0.0 - addDec(max)) + addDec(max)

    setTime(random(duration))
  }, [ duration ])

  return (
    <Span
      time={time}
      initialOpacity={initialOpacity}
    >
      {letter}
    </Span>
  )
}

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  initialOpacity: PropTypes.number.isRequired
}

Letter.defaultProps = {
  duration: 1,
  initialOpacity: 0.1
}

export const FadeInText = props => (
  isSSR ?
    createElement(props.as, null, props.children) :
    (
      <Wrapper {...props}>
        {props.children.split("").map((letter, i) => (
          <Letter
            key={i}
            letter={letter}
            {...props}
          />
        ))}
      </Wrapper>
    )
)

FadeInText.propTypes = {
  as: PropTypes.string
}
