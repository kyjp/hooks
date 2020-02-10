import React, { FC } from 'react'

export interface CountProps {
  text: string,
  count: number
}

const AfterCountComponent: FC<CountProps> = ({ text, count }) => {
  console.log(`Count component -`, text)
  return (
    <div>
      {text}: {count}
    </div>
  )
}

export default React.memo(AfterCountComponent)
