import React, { FC, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const BeforeCheckComponent: FC = () => {
  const [countOne, setCountOne] = useState(0)
  const [countTwo, setCountTwo] = useState(0)
  const [flg, setFlg] = useState(false)

  const addOne = () => {
    setCountOne(countOne + 1)
  }

  const addTwo = () => {
    setCountTwo(countTwo + 1)
  }

  const isEven = () => {
    let i = 0
    while (i < 2000000000) i++
    return countOne % 2 === 0
  }

  return (
    <div>
      <p>カウント1: {isEven() ? '偶数' : '奇数'}</p>
      <div className="buttons"><button className="button  is-primary" onClick={addOne}>カウント1 - {countOne}</button></div>
      <div className="buttons"><button className="button  is-primary" onClick={addTwo}>カウント2 - {countTwo}</button></div>
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
  import React, { FC, useState } from 'react'

  const BeforeCheckComponent: FC = () => {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)
    const [flg, setFlg] = useState(false)

    const addOne = () => {
      setCountOne(countOne + 1)
    }

    const addTwo = () => {
      setCountTwo(countTwo + 1)
    }

    const isEven = () => {
      return countOne % 2 === 0
    }

    return (
      <div>
        <p>カウント1: {isEven() ? '偶数' : '奇数'}</p>
        <div className="buttons"><button className="button  is-primary" onClick={addOne}>カウント1 - {countOne}</button></div>
        <div className="buttons"><button className="button  is-primary" onClick={addTwo}>カウント2 - {countTwo}</button></div>
      </div>
    )
  }

  export default BeforeCheckComponent
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

export default BeforeCheckComponent
