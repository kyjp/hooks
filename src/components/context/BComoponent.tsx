import React, { FC, useState, useContext } from 'react'
import { UserContext, LanguageContext } from '../../App'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const BComponent: FC = () => {
  const user = useContext(UserContext)
  const Language = useContext(LanguageContext)
  const [flg, setFlg] = useState(false)
  return (
    <div>
      <p>useContextを使う場合</p>
      <p>
        {user.name}
        <br />
        {Language}
      </p>
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
  import React, { FC, useContext } from 'react'
  import { UserContext, LanguageContext } from '../../App'

  const BComponent: FC = () => {
    const user = useContext(UserContext)
    const Language = useContext(LanguageContext)
    return (
      <div>
        <p>useContextを使う場合</p>
        <p>
          {user.name}
          <br />
          {Language}
        </p>
      </div>
    )
  }

  export default BComponent
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

export default BComponent
