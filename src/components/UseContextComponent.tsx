import React, { FC } from 'react'
import AComponent from './context/AComponent'
import BComponent from './context/BComoponent'

/*
Contextは状態とメソッドをpropsを使わずに全体で扱うことができるようにするもの。
データストアの役割を果たしpropsバケツリレーを防ぐために使う。
*/

const UseContextComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">useContext</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                context
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <AComponent />
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
                useContext
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <BComponent />
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

export default UseContextComponent;
