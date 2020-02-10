import React, { FC } from 'react'

import EffectClass from './common/EffectClass'
import HookEffect from './common/HookEffect'

/*
useEffectは副作用処理（Side effect）を関数コンポーネントで扱う（※副作用処理とはDOMの変更やAPI通信、変数の代入など）
クラスコンポーネントでのライフサイクルメソッドの役割を果たす（componentDidMount,componentDidUpdate,componentWillUnmountの役割）
useLayoutEffectも同じような動きをするが、useEffectはレンダリングの結果が描画された後に呼び出されるのに比べ、useLayoutEffectはレンダリング結果が描画される前に呼び出される。
useLayoutEffectはレンダリングをブロックするため、基本的にはuseEffectを使うべき。
ちなみにcomponentDidMountやcomponentDidUpdateのタイミングはuseLayoutEffectと同じである。
https://qiita.com/uhyo/items/246fb1f30acfeb7699da
*/

const UseEffectComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">useEffect</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                class component
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <EffectClass />
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
                function component
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <HookEffect />
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

export default UseEffectComponent;
