import React, { FC } from 'react'

const AfterTitleComponent: FC = () => {
  console.log('Title component')
  return (
    <div>
      <p> useCallbackによる最適化  </p>
    </div>
  )
}

export default React.memo(AfterTitleComponent)
