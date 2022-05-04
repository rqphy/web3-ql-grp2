import React, { FunctionComponent, useState } from 'react'
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
  const [display, setDisplay] = useState<string>('0')

  const maximumDigits = 40;
  
  // Pad buttons handlers
  const onDigitButtonClick = (digit: String) => {
    let newDisplay = display
    if(newDisplay.length > maximumDigits ) {
      setAlertMessage(`Chiffre maxium autorisé est de 11${maximumDigits}`);
      return
    }
    setDisplay(newDisplay + digit.toString())
    setAlertMessage(``);
  }

  const onEqualButtonClick = () => {
    console.log('on equel and fetching ====');
    setResult('34')
    
  }

  const onAllClearButtonClick = () => {
    setPendingOperator(undefined)
    setDisplay('0')
    setWaitingForOperand(true)
    setAlertMessage(``);
  }

  const onClearEntryButtonClick = () => {
    setDisplay('0')
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
        onClearEntryButtonClick={onClearEntryButtonClick}
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
