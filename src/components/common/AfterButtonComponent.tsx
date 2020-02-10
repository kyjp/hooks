import React, { FC } from 'react'

export interface buttonProps {
  handleClick: () => void,
  children: string
}

const AfterButtonComponent: FC<buttonProps> = ({ handleClick, children }) => {
  console.log(`Button component -`, children)
  return (
    <div>
      <div className="buttons"><button className="button is-primary" onClick={handleClick}>{children}</button></div>
    </div>
  )
}

export default React.memo(AfterButtonComponent)
