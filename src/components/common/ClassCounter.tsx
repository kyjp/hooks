import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'


// 型定義
interface CounterProps {}

interface CounterState {
  count: number
  flg: boolean
}

//第一引数にprops、第二引数にstateの型を定義する
export class Counter extends Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    /* constructorでthisを使いたい場合、superを強制される。
    propsを渡すのはthis.propsの初期化。
    厳密には必須ではないがconstructorの実行が終わるまでthis.propsが未定義になるため、superにpropsを渡した方がいい。
    https://qiita.com/hand-dot/items/61a4b808f110b12e4281
    */
    super(props)
    // ↓ここからthisが使える
    //stateの設定
    this.state = {
      count: 0,
      flg: false
    }
  }

  addCount: () => void = () => {
    //setStateによってlocalstateのデータを書き換える
    this.setState({
      count: this.state.count + 10
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div className="buttons"><button className="button is-primary" onClick={this.addCount}>+ 10</button></div>
        <button className="button is-light" onClick={() => this.state.flg ? this.setState({ flg: false }) : this.setState({ flg: true })}>codeを見る</button>
        {(() => {
          if (this.state.flg) {
            return (
              <>
                <br />
                <br />
        <SyntaxHighlighter language="javascript" style={solarizedDark}>
          {
            `
  import React, { Component } from 'react'


  // 型定義
  interface CounterProps {}

  interface CounterState {
    count: number
  }

  //第一引数にprops、第二引数にstateの型を定義する
  export class Counter extends Component<CounterProps, CounterState> {
    constructor(props: CounterProps) {
      /* constructorでthisを使いたい場合、superを強制される。
      propsを渡すのはthis.propsの初期化。
      厳密には必須ではないがconstructorの実行が終わるまでthis.propsが未定義になるため、superにpropsを渡した方がいい。
      https://qiita.com/hand-dot/items/61a4b808f110b12e4281
      */
      super(props)
      // ↓ここからthisが使える
      //stateの設定
      this.state = {
        count: 0
      }
    }

    addCount: () => void = () => {
      //setStateによってlocalstateのデータを書き換える
      this.setState({
        count: this.state.count + 10
      })
    }

    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <div className="buttons"><button className="button is-primary" onClick={this.addCount}>+ 10</button></div>
        </div>
      )
    }
  }

  export default Counter
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
}

export default Counter
