import React, { FC, useState, useEffect } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const HookEffect: FC = () => {
  const [count, setCount] = useState(0)
  const [flg, setFlg] = useState(false)

  //レンダリング時に毎回働く
  // useEffect(() => {
  //   console.log('マウント、アップデート', {
  //     'クリック回数': count + '回'
  //   })
  // })

  //第二引数をから配列にすることで初期ロード時のみuseEffectが働く
  // useEffect(() => {
  //   console.log('マウント', {
  //     'クリック回数': count + '回'
  //   })
  // }, [])

  //第二引数に変数を指定することでその変数をwatchする
  useEffect(() => {
    console.log('カウントアップデート', {
      'クリック回数': count + '回'
    })
    // リターンはアンマウント時の処理
    return (() => {
      console.log('アンマウント')
    })()
  }, [count])

  return (
    <div>
      <div>
        <p>{count}</p>
        <div className="buttons"><button className="button is-primary" onClick={() => setCount(count + 1)}>+ 1</button></div>
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
  import React, { FC, useState, useEffect } from 'react'

  const HookEffect: FC = () => {
    const [count, setCount] = useState(0)

    //レンダリング時に毎回働く
    // useEffect(() => {
    //   console.log('マウント、アップデート', {
    //     'クリック回数': count + '回'
    //   })
    // })

    //第二引数をから配列にすることで初期ロード時のみuseEffectが働く
    // useEffect(() => {
    //   console.log('マウント', {
    //     'クリック回数': count + '回'
    //   })
    // }, [])

    //第二引数に変数を指定することでその変数をwatchする
    useEffect(() => {
      console.log('カウントアップデート', {
        'クリック回数': count + '回'
      })
      // リターンはアンマウント時の処理
      return (() => {
        console.log('アンマウント')
      })()
    }, [count])

    const codeString = '(num) => num + 1'

    return (
      <div>
        <div>
          <p>{count}</p>
          <div className="buttons"><button className="button is-primary" onClick={() => setCount(count + 1)}>+ 1</button></div>
          <p>コンソールで動作を確認してください。</p>
        </div>
      </div>
    )
  }

  export default HookEffect
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
  )
}

export default HookEffect
