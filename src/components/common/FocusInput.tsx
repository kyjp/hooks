import React, { FC, useEffect, useRef, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


/*
useRefとはcreateRefのhooks版。
DOMに対する参照を保つために使われる。
以前のstateの値を参照する方法もある。
useRefで値を保持することの特性は「再描画を発生させないこと」。
https://qiita.com/seya/items/6bbfa3f9d489809ccb2c
*/
const FocusInput: FC = () => {
  const [flg, setFlg] = useState(false)
  const inputRef: any = useRef(null)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        className="input" />
      <br />
      <br />
      <button className="button is-light" onClick={() => flg ? setFlg(false) : setFlg(true)}>codeを見る</button>
      {(() => {
        if (flg) {
          return (
            <>
              <br />
              <br />
              <SyntaxHighlighter language="javascript" style={solarizedDark} >
                {
                  `
  import React, { FC, useEffect, useRef } from 'react'


  /*
  useRefとはcreateRefのhooks版。
  DOMに対する参照を保つために使われる。
  以前のstateの値を参照する方法もある。
  useRefで値を保持することの特性は「再描画を発生させないこと」。
  https://qiita.com/seya/items/6bbfa3f9d489809ccb2c
  */
  const FocusInput: FC = () => {
    const [flg, setFlg] = useState(false)
    const inputRef: any = useRef(null)
    useEffect(() => {
      inputRef.current.focus()
    }, [])
    return (
      <div>
        <input type="text" ref={inputRef} />
      </div>
    )
  }

  export default FocusInput
                  `
                }
              </SyntaxHighlighter>
            </>
          )
        }
      })()
      }
    </div>
  )
}

export default FocusInput
