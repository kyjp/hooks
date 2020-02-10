import React, { FC, useReducer, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

//初期値
const initialState = 0
const reducer = (state: number, action: {type: string, value: number}) => {
  switch (action.type) {
    case 'add':
      return state + action.value
    case 'minus':
      return state - action.value
    case 'reset':
      return initialState
    default:
      return state
  }
}

const ReducerCounter: FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [flg, setFlg] = useState(false)
  return (
    <>
      <p>{count}</p>
      <div className="buttons"><button className="button is-primary" onClick={() => dispatch({ type: 'add', value: 1 })}>+1</button></div>
      <div className="buttons"><button className="button is-warning" onClick={() => dispatch({ type: 'minus', value: 1 })}>-1</button></div>
      <div className="buttons"><button className="button  is-danger" onClick={() => dispatch({ type: 'reset', value: 0 })}>reset</button></div>
      <button className="button is-light" onClick={() => flg ? setFlg(false) : setFlg(true)}>codeを見る</button>
      {(() => {
        if (flg) {
          return (
            <>
              <br />
              <br />
              <SyntaxHighlighter language="javascript" style={solarizedDark}>
                {
                  `
  import React, { FC, useReducer } from 'react'

  //初期値
  const initialState = 0
  const reducer = (state: number, action: {type: string, value: number}) => {
    switch (action.type) {
      case 'add':
        return state + action.value
      case 'minus':
        return state - action.value
      case 'reset':
        return initialState
      default:
        return state
    }
  }

  const ReducerCounter: FC = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <>
        <p>{count}</p>
        <div className="buttons"><button className="button is-primary" onClick={() => dispatch({ type: 'add', value: 1 })}>+1</button></div>
        <div className="buttons"><button className="button is-warning" onClick={() => dispatch({ type: 'minus', value: 1 })}>-1</button></div>
        <div className="buttons"><button className="button  is-danger" onClick={() => dispatch({ type: 'reset', value: 0 })}>reset</button></div>
      </>
    )
  }

  export default ReducerCounter
                    `
                  }
                </SyntaxHighlighter>
              </>
            )
          }
        })()
      }
    </>
  )
}

export default ReducerCounter
