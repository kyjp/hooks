import React, { FC, useContext } from 'react'
import { CountContext } from '../UseReducerComponent'

const CComponent: FC = () => {
  const count = useContext(CountContext)
  return (
    <div>
      <div className="buttons"><button className="button is-primary" onClick={() => count.countDispatch({ type: 'add', value: 1 })}>+1</button></div>
    </div>
  )
}

export default CComponent
