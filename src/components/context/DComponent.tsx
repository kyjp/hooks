import React, { FC, useContext } from 'react'
import { CountContext } from '../UseReducerComponent'

const DComponent: FC = () => {
  const count = useContext(CountContext)
  return (
    <div>
      <div className="buttons"><button className="button is-warning" onClick={() => count.countDispatch({ type: 'minus', value: 1 })}>-1</button></div>
    </div>
  )
}

export default DComponent
