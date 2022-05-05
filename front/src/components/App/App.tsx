import React, { FunctionComponent, useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import Display from '../Display/Display'
import Result from '../Result/Result'
import Pad from '../Pad/Pad'
import { Operator } from '../../lib/types'


const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  width: 100%;
  max-width: 520px;
`
const StyledMessages = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue" ,Arial ,sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 16px;
  width: 100%;
  max-width: 320px;
`

export const App: FunctionComponent = () => {
  // Calculator's states
  const [result, setResult] = useState<string>('Entrez un calcul et appuyez sur égal')
  const [alertMessage, setAlertMessage] = useState<string>('')
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(true)
  const [pendingOperator, setPendingOperator] = useState<Operator>()
  const [display, setDisplay] = useState<string>('')

  const maximumDigits = 40;
  
  // Pad buttons handlers
  const onDigitButtonClick = (digit: String) => {
    let newDisplay = display
    
    if(digit === ' ') {
      if(display[display.length - 1] === ' ') return
    } 
    
    if(newDisplay.length > maximumDigits ) {
      setAlertMessage(`Chiffre maxium autorisé est de 11${maximumDigits}`);
      return
    }
    
    setDisplay(newDisplay + digit.toString())
    setAlertMessage('');
  }

  const onEqualButtonClick = async () => {
    const res = await axios.post('http://localhost:4000', {
      "expression": display
    })
    setResult(res.data.result)
    
  }

  const onAllClearButtonClick = () => {
    setPendingOperator(undefined)
    setDisplay('')
    setWaitingForOperand(true)
    setAlertMessage(``);
  }

  return (
    <>
    <StyledApp>
      <Display value={display} expression={typeof pendingOperator !== 'undefined' ? `${result}${pendingOperator}${waitingForOperand ? '' : display}` : ''} />
      <Pad
        onDigitButtonClick={onDigitButtonClick}
        onEqualButtonClick={onEqualButtonClick}
        onAllClearButtonClick={onAllClearButtonClick}
      />
    </StyledApp>
    <StyledMessages>

      <Result value={result} />
      <Result value={alertMessage} />
    </StyledMessages>
    </>

  )
}

export default App
