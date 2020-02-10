import React, { FC } from 'react'
import BeforeCallbackComponent from './BeforeCallBackComponent'
import AfterCallbackComponent from './AfterCallBackComponent'

/*
useCallbackはパフォーマンス向上用フック。
イベントハンドラ（処理を行うきっかけ）をメモ化（一時的の保持）することによって不要なインスタンスの作成を抑制する。
これにより不要な再描画がなくなりパフォーマンスが向上する。
*/

const UseCallbackComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">useCallback</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                useCallback + React.memo適用前
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <BeforeCallbackComponent />
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
                useCallback + React.memo適用後
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <AfterCallbackComponent />
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

export default UseCallbackComponent;
