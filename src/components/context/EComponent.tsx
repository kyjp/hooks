import React, { FC, useContext } from 'react'
import { CountContext } from '../UseReducerComponent'

const EComponent: FC = () => {
  const count = useContext(CountContext)
  return (
    <div>
      <div className="buttons"><button className="button  is-danger" onClick={() => count.countDispatch({ type: 'reset', value: 0 })}>reset</button></div>
    </div>
  )
}

export default EComponent
