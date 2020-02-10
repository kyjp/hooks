import React, { FC } from 'react'

import ClassCounter from './common/ClassCounter'
import HookCounter from './common/HookCounter'

const UseStateComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">useState</h2>
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
                <ClassCounter />
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
                <HookCounter />
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
