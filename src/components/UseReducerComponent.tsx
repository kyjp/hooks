import React, { FC, createContext, useReducer, useState } from 'react'
import ReducerCounter from './common/ReducerCounter'
import CComponent from './context/CComponent'
import DComponent from './context/DComponent'
import EComponent from './context/EComponent'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

/* useReducerは状態管理用のhooks。
useStateに代替するhookでuseStateにできることはuseReducerでできる。（useStateはuseReducerに内部実装されている。）
useReducerはstateとdispatchを返す。
const [state, dispatch] = useReducer(reducer, 初期値)
※ reducerはstateを更新するための関数で、dispatchはreducerを実行するための関数
dispatchには引数でactionを渡す。（actionは何をするかを示すobject)

useStateで扱うステートの型 Number, String, Booleanなどのシンプルなもの
useReducerで扱うステートの型 Object, Arrayなどの複雑な構造のもの
ビジネスロジック（プログラムにおける処理の手順）が必要な場合や、ストアがローカルでなくグローバルに必要な場合はuseReducerを使う方が望ましい。
*/

interface stateProps {
  counter: number
}

export const CountContext = createContext({} as any)

const initialState: stateProps = {
  counter: 0
}
const reducer = (state: stateProps, action: { type: string, value: number }) => {
  switch (action.type) {
    case 'add':
      return { ...state, counter: state.counter + action.value }
    case 'minus':
      return { ...state, counter: state.counter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}

const UseReducerComponent: FC = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [flg, setFlg] = useState(false)
  return (
    <div>
      <h2 className="title is-4">useReducer</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                useReducer単体
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <ReducerCounter />
              </div>
            </div>
            <footer className="card-footer">
            </footer>
          </div>
        </div>
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                useContext + useReducer
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <p>{ count.counter }</p>
                <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                  <CComponent />
                  <br/>
                  <DComponent />
                  <br/>
                  <EComponent />
                </CountContext.Provider>
                <br />
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
  import React, { FC, createContext, useReducer } from 'react'
  import ReducerCounter from './common/ReducerCounter'
  import CComponent from './context/CComponent'
  import DComponent from './context/DComponent'
  import EComponent from './context/EComponent'

  /* useReducerは状態管理用のhooks。
  useStateに代替するhookでuseStateにできることはuseReducerでできる。（useStateはuseReducerに内部実装されている。）
  useReducerはstateとdispatchを返す。
  const [state, dispatch] = useReducer(reducer, 初期値)
  ※ reducerはstateを更新するための関数で、dispatchはreducerを実行するための関数
  dispatchには引数でactionを渡す。（actionは何をするかを示すobject)

  useStateで扱うステートの型 Number, String, Booleanなどのシンプルなもの
  useReducerで扱うステートの型 Object, Arrayなどの複雑な構造のもの
  ビジネスロジック（プログラムにおける処理の手順）が必要な場合や、ストアがローカルでなくグローバルに必要な場合はuseReducerを使う方が望ましい。
  */

  interface stateProps {
    counter: number
  }

  export const CountContext = createContext({} as any)

  const initialState: stateProps = {
    counter: 0
  }
  const reducer = (state: stateProps, action: { type: string, value: number }) => {
    switch (action.type) {
      case 'add':
        return { ...state, counter: state.counter + action.value }
      case 'minus':
        return { ...state, counter: state.counter - action.value }
      case 'reset':
        return initialState
      default:
        return state
    }
  }

  const UseReducerComponent: FC = () => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
      <div>
        <h2 className="title is-4">useReducer</h2>
        <div className="columns">
          <div className="column is-half-desktop">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  useReducer単体
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <ReducerCounter />
                </div>
              </div>
              <footer className="card-footer">
              </footer>
            </div>
          </div>
          <div className="column is-half-desktop">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  useContext + useReducer
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <p>{ count.counter }</p>
                  <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
                    <CComponent />
                    <br/>
                    <DComponent />
                    <br/>
                    <EComponent />
                  </CountContext.Provider>
                </div>
              </div>
              <footer className="card-footer">
              </footer>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default UseReducerComponent;
                    `
                              }
                            </SyntaxHighlighter>
                          </>
                        )
                      }
                    })()
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseReducerComponent;
