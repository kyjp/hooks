import React, { FC, useState } from 'react'
import BeforeCountComponent from './common/BeforeCountComponent'
import BeforeButtonComponent from './common/BeforeButtonComponent'
import BeforeTitleComponent from './common/BeforeTitleComponent'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const BeforeCallBackComponent: FC = () => {
  const [age, setAge] = useState(30)
  const [score, setScore] = useState(100)
  const addAge = () => {
    setAge(age + 1)
  }
  const addScore = () => {
    setScore(score + 100)
  }
  const [flg, setFlg] = useState(false)

  return (
    <div>
      <BeforeTitleComponent />
      <BeforeCountComponent text='年齢' count={age} />
      <BeforeCountComponent text='信用スコア' count={score} />
      <br />
      <BeforeButtonComponent handleClick={addAge}>年齢+</BeforeButtonComponent>
      <br/>
      <BeforeButtonComponent handleClick={addScore}>信用スコア+</BeforeButtonComponent>
      <br />
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
  import React, { FC, useState } from 'react'
  import BeforeCountComponent from './common/BeforeCountComponent'
  import BeforeButtonComponent from './common/BeforeButtonComponent'
  import BeforeTitleComponent from './common/BeforeTitleComponent'

  const BeforeCallBackComponent: FC = () => {
    const [age, setAge] = useState(30)
    const [score, setScore] = useState(100)
    const addAge = () => {
      setAge(age + 1)
    }
    const addScore = () => {
      setScore(score + 100)
    }

    return (
      <div>
        <BeforeTitleComponent />
        <BeforeCountComponent text='年齢' count={age} />
        <BeforeCountComponent text='信用スコア' count={score} />
        <br />
        <BeforeButtonComponent handleClick={addAge}>年齢+</BeforeButtonComponent>
        <br/>
        <BeforeButtonComponent handleClick={addScore}>信用スコア+</BeforeButtonComponent>
        <br />
        <p>コンソールで動作を確認してください。</p>
      </div>
    )
  }

  export default BeforeCallBackComponent
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

export default BeforeCallBackComponent
