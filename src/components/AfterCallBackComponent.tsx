import React, { FC, useState, useCallback } from 'react'
import AfterCountComponent from './common/AfterCountComponent'
import AfterButtonComponent from './common/AfterButtonComponent'
import AfterTitleComponent from './common/AfterTitleComponent'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AfterCallBackComponent: FC = () => {
  const [age, setAge] = useState(30)
  const [score, setScore] = useState(100)
  const addAge = useCallback(() => {
    setAge(age + 1)
  }, [age])
  const addScore = useCallback(() => {
    setScore(score + 100)
  }, [score])
  const [flg, setFlg] = useState(false)

  return (
    <div>
      <AfterTitleComponent />
      <AfterCountComponent text='年齢' count={age} />
      <AfterCountComponent text='信用スコア' count={score} />
      <br />
      <AfterButtonComponent handleClick={addAge}>年齢+</AfterButtonComponent>
      <br />
      <AfterButtonComponent handleClick={addScore}>信用スコア+</AfterButtonComponent>
      <br/>
      <p>コンソールで動作を確認してください。</p>
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
  import React, { FC, useState, useCallback } from 'react'
  import AfterCountComponent from './common/AfterCountComponent'
  import AfterButtonComponent from './common/AfterButtonComponent'
  import AfterTitleComponent from './common/AfterTitleComponent'

  const AfterCallBackComponent: FC = () => {
    const [age, setAge] = useState(30)
    const [score, setScore] = useState(100)
    const addAge = useCallback(() => {
      setAge(age + 1)
    }, [age])
    const addScore = useCallback(() => {
      setScore(score + 100)
    }, [score])

    return (
      <div>
        <AfterTitleComponent />
        <AfterCountComponent text='年齢' count={age} />
        <AfterCountComponent text='信用スコア' count={score} />
        <br />
        <AfterButtonComponent handleClick={addAge}>年齢+</AfterButtonComponent>
        <br />
        <AfterButtonComponent handleClick={addScore}>信用スコア+</AfterButtonComponent>
        <br/>
        <p>コンソールで動作を確認してください。</p>
      </div>
    )
  }

  export default AfterCallBackComponent
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

export default AfterCallBackComponent
