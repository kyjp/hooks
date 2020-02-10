import React, { FC, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import FocusInput from './common/FocusInput'
import RefCount from './common/RefCount'

/*
useRefの主な用途はDOMへの参照。JSXのrefプロパティにuseRefで作成した参照を渡してやることで、DOMへ簡単にアクセスできるようになる。
https://qiita.com/kgtkr/items/374e2b676c953f14ec99
https://sbfl.net/blog/2019/11/12/react-hooks-introduction/#useRef
*/
const UseStateComponent: FC = () => {
  const [flg, setFlg] = useState(false)
  return (
    <div>
      <h2 className="title is-4">useRef</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                DOMに対する参照
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <FocusInput />
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
                以前のstateの値にアクセス
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <RefCount />
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

  import FocusInput from './common/FocusInput'
  import RefCount from './common/RefCount'

  /*
  useRefの主な用途はDOMへの参照。JSXのrefプロパティにuseRefで作成した参照を渡してやることで、DOMへ簡単にアクセスできるようになる。
  https://qiita.com/kgtkr/items/374e2b676c953f14ec99
  https://sbfl.net/blog/2019/11/12/react-hooks-introduction/#useRef
  */
  const UseStateComponent: FC = () => {
    const [flg, setFlg] = useState(false)
    return (
      <div>
        <h2 className="title is-4">useRef</h2>
        <div className="columns">
          <div className="column is-half-desktop">
            <div className="card">
              <header className="card-header">
                <p className="card-header-title">
                  DOMに対する参照
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <FocusInput />
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
                  以前のstateの値にアクセス
                </p>
              </header>
              <div className="card-content">
                <div className="content">
                  <RefCount />
                  <button className="button is-light" onClick={() => flg ? setFlg(false) : setFlg(true)}>codeを見る</button>
                  {(() => {
                    if (flg) {
                      return (
                        <>
                          <br />
                          <br />
                        </>
                      )
                    }
                  })()
                  }
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

  export default UseStateComponent
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
            <footer className="card-footer">
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseStateComponent
