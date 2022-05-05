import React, { FunctionComponent, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Digit, Operator } from '../../lib/types'

interface PadProps {
  onDigitButtonClick: (digit: String) => void
  onEqualButtonClick: () => void
  onAllClearButtonClick: () => void
}

const StyledPad = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
`

export const Pad: FunctionComponent<PadProps> = ({
  onDigitButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }: KeyboardEvent) => {
    if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onDigitButtonClick('+')
    } else if (keyCode === 109 || keyCode === 189) {
      onDigitButtonClick('-')
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onDigitButtonClick('×')
    } else if (keyCode === 111 || keyCode === 191) {
      onDigitButtonClick('÷')
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick()
    } else if (keyCode === 46) {
      onDigitButtonClick(' ')
    } else if (keyCode === 27) {
      onAllClearButtonClick()
    }
  }

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeyDown)
    return () => document.body.removeEventListener('keydown', handleKeyDown)
  })

  return (
    <StyledPad>
      <Button color="red" onClick={onAllClearButtonClick}>
        AC
      </Button>
      <Button onClick={() => onDigitButtonClick(' ')}>
        Space
      </Button>
      <Button color="dark" onClick={() => onDigitButtonClick('NEGATE')}>
       NEGATE
      </Button>
      <Button color="dark" onClick={() => onDigitButtonClick('÷')}>
        ÷
      </Button>
      <Button onClick={() => onDigitButtonClick('7')}>
        7
      </Button>
      <Button onClick={() => onDigitButtonClick('8')}>
        8
      </Button>
      <Button onClick={() => onDigitButtonClick('9')}>
        9
      </Button>
      <Button color="dark" onClick={() => onDigitButtonClick('×')}>
        ×
      </Button>
      <Button onClick={() => onDigitButtonClick('4')}>
        4
      </Button>
      <Button onClick={() => onDigitButtonClick('5')}>
        5
      </Button>
      <Button onClick={() => onDigitButtonClick('6')}>
        6
      </Button>
      <Button color="dark" onClick={() => onDigitButtonClick('-')}>
        -
      </Button>
      <Button onClick={() => onDigitButtonClick('1')}>
        1
      </Button>
      <Button onClick={() => onDigitButtonClick('2')}>
        2
      </Button>
      <Button onClick={() => onDigitButtonClick('3')}>
        3
      </Button>
      <Button color="dark" onClick={() => onDigitButtonClick('+')}>
        +
      </Button>
      <Button onClick={() => onDigitButtonClick('0')}>
        0
      </Button>
      <Button onClick={() =>onDigitButtonClick('.')}>
        .
      </Button>
      <Button color="green" isLarge={true} onClick={onEqualButtonClick}>
        =
      </Button>
    </StyledPad>
  )
}

export default Pad
