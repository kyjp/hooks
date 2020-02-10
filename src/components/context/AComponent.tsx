import React, { FC, useState } from 'react'
import { UserContext, LanguageContext } from '../../App'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const AComponent: FC = () => {
  const [flg, setFlg] = useState(false)
  return (
    <div>
      <p>Contextを使った場合</p>
      <UserContext.Consumer>
        {
          user => {
            return (
              <LanguageContext.Consumer>
                {
                  Language => {
                    return <p>{user.name}<br />{Language}</p>
                  }
                }
              </LanguageContext.Consumer>
            )
          }
        }
      </UserContext.Consumer>
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
  import React, { FC } from 'react'
  import { UserContext, LanguageContext } from '../../App'

  const AComponent: FC = () => {
    return (
      <div>
        <p>Contextを使った場合</p>
        <UserContext.Consumer>
          {
            user => {
              return (
                <LanguageContext.Consumer>
                  {
                    Language => {
                      return <div>{user.name}<br />{Language}</div>
                    }
                  }
                </LanguageContext.Consumer>
              )
            }
          }
        </UserContext.Consumer>
      </div>
    )
  }

  export default AComponent
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

export default AComponent
