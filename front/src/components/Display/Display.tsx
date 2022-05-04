import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface DisplayProps {
  expression: string
  value: string
}

const StyledExpression = styled.span`
  margin-left: auto;
`

const StyleScreen = styled.div`
  font-size: 1em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
  overflow-x: scroll;
`

const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`

export const Screen: FunctionComponent<DisplayProps> = ({ value, expression }) => {
  return (
    <StyledDisplay>
        <StyledExpression>
          {expression}
        </StyledExpression>

      <StyleScreen>
        {value}
      </StyleScreen>
    </StyledDisplay>
  )
}

export default Screen
