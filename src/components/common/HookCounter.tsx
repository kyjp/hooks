import React, { FC, useState } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

/*
ルール
・reacthooksはトップレベルのみで呼び出す。ループ、条件分岐、ネストされたコンポーネントで呼び出さない。これを守ることで毎回同じ順番で呼び出される。複数回呼び出された場合も正しい形で呼び出すことができるため。
・reacthooksを呼び出すのは関数コンポーネント内か、customhook内からのみ。

コンポーネント内のstateを正しい形で保持するため
*/


const HookCounter: FC = () => {
  /* stateを定義
  useStateに引数を渡すことで初期値を設定できる。
  useStateはstateと更新関数を返す。
  */
  const [count, setCount] = useState(0)
  const [flg, setFlg] = useState(false)
  const addCount = () => {
    /*
    countを更新される前の値を使って更新をする場合はprevCountを使う。
    通常はsetCount(1)のようにセットする。
    配列、関数を扱う際はスプレッド構文で展開してから新しい値をいれないと上書きされてしまう。
    */
    for (let i: number = 0; i < 10; i++) setCount(prevCount => prevCount + 1)
  }
  return (
    <div>
      <p>{count}</p>
      <div className="buttons"><button className="button is-primary" onClick={addCount}>+ 10</button></div>
      <button className="button is-light" onClick={() => flg ? setFlg(false) : setFlg(true)}>codeを見る</button>
      {(() => {
        if (flg) {
          return (
            <>
              <br />
              <br />
              <SyntaxHighlighter language="javascript" style={solarizedDark} highlighter={"hljs"}>
                {
                  `
  import React, { FC, useState } from 'react'

  /*
  ルール
  ・reacthooksはトップレベルのみで呼び出す。ループ、条件分岐、ネストされたコンポーネントで呼び出さない。これを守ることで毎回同じ順番で呼び出される。複数回呼び出された場合も正しい形で呼び出すことができるため。
  ・reacthooksを呼び出すのは関数コンポーネント内か、customhook内からのみ。

  コンポーネント内のstateを正しい形で保持するため
  */


  const HookCounter: FC = () => {
    /* stateを定義
    useStateに引数を渡すことで初期値を設定できる。
    useStateはstateと更新関数を返す。
    */
    const [count, setCount] = useState(0)
    const addCount = () => {
      /*
      countを更新される前の値を使って更新をする場合はprevCountを使う。
      通常はsetCount(1)のようにセットする。
      配列、関数を扱う際はスプレッド構文で展開してから新しい値をいれないと上書きされてしまう。
      */
      for (let i: number = 0; i < 10; i++) setCount(prevCount => prevCount + 1)
    }
    return (
      <div>
        <p>{count}</p>
        <div className="buttons"><button className="button is-primary" onClick={addCount}>+ 10</button></div>
        </SyntaxHighlighter>
      </div>
    )
  }

  export default HookCounter
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

export default HookCounter
