import React, { FC, useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const DocTitleUpdateTwoComponent: FC = () => {
  const [flg, setFlg] = useState(false)
  const [count, setCount] = useState(0)
  useDocumentTitle(Number(count))
  return (
    <div>
      <div className="buttons"><button className="button is-primary" onClick={() => setCount(count + 1)}>count - {count}</button></div>
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
  import useDocumentTitle from '../hooks/useDocumentTitle'

  const DocTitleUpdateTwoComponent: FC = () => {
    const [count, setCount] = useState(0)
    useDocumentTitle(Number(count))
    return (
      <div>
        <div className="buttons"><button className="button is-primary" onClick={() => setCount(count + 1)}>count - {count}</button></div>
      </div>
    )
  }

  export default DocTitleUpdateTwoComponent

  import { useEffect } from 'react'

  const useDocumentTitle = (count: number) => {
    useEffect(() => {
      document.title = 'カウント ${count}'
    }, [count])
  }

  export default useDocumentTitle
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

export default DocTitleUpdateTwoComponent
