import React, { Component } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

// 型定義
interface EffectClassProps { }

interface EffectClassState {
  count: number
  flg: boolean
}

class EffectClass extends Component<EffectClassProps, EffectClassState> {
  constructor(props: EffectClassProps) {
    super(props)
    this.state = {
      count: 0,
      flg: false
    }
  }

  componentDidMount() {
    console.log('マウント', {
      'クリック回数': this.state.count + '回'
    })
  }

  componentDidUpdate() {
    console.log('アップデート', {
      'クリック回数': this.state.count + '回'
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div className="buttons"><button className="button is-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>+ 1</button></div>
        <p>コンソールで動作を確認してください。</p>
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
  interface EffectClassProps { }

  interface EffectClassState {
    count: number
  }

  class EffectClass extends Component<EffectClassProps, EffectClassState> {
    constructor(props: EffectClassProps) {
      super(props)
      this.state = {
        count: 0
      }
    }

    componentDidMount() {
      console.log('マウント', {
        'クリック回数': this.state.count + '回'
      })
    }

    componentDidUpdate() {
      console.log('アップデート', {
        'クリック回数': this.state.count + '回'
      })
    }

    render() {
      return (
        <div>
          <p>{this.state.count}</p>
          <div className="buttons"><button className="button is-primary" onClick={() => this.setState({ count: this.state.count + 1 })}>+ 1</button></div>
          <p>コンソールで動作を確認してください。</p>
        </div>
      )
    }
  }

  export default EffectClass
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

export default EffectClass
