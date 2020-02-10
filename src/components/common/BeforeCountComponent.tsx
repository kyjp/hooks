import React, { FC } from 'react'

export interface CountProps {
  text: string,
  count: number
}

const BeforeCountComponent: FC<CountProps> = ({text, count}) => {
  console.log(`Count component -`, text)
  return (
    <div>
      {text}: {count}
    </div>
  )
}

export default BeforeCountComponent
