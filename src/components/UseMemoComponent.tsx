import React, { FC } from 'react'

import BeforeCheckComponent from './common/BeforeCheckComponent'
import AfterCheckComponent from './common/AfterCheckComponent'
/*useMemoははパフォーマンス向上用フック。
関数の結果を保持する（余分なものを生成しない）
*/
const UseMemoComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">useMemo</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                useMemo適用前
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <BeforeCheckComponent />
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
                useMemo適用後
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <AfterCheckComponent />
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

export default UseMemoComponent;
