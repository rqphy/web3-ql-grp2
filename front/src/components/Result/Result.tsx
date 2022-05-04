import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface ResultProps {
  value: string
}

const StyleResult = styled.div`
  font-size: 1em;
  min-height: 1.4em;
  display: flex;
  align-items: center;
  justify-content: flex-end;  
`

const StyledDisplay = styled.div`
  background-color: #393939;
  color: #fff;
  padding: 1.5em 1em;
`

export const Result: FunctionComponent<ResultProps> = ({ value}) => {
  return (
    <StyledDisplay>
      <StyleResult>
        {value}
      </StyleResult>
    </StyledDisplay>
  )
}

export default Result
