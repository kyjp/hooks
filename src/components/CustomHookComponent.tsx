import React, { FC } from 'react'
import DocTitleUpdateComponent from './common/DocTitleUpdateComponent'
import DocTitleUpdateTwoComponent from './common/DocTitleUpdateTwoComponent'
import FormComponent from './common/FormComponent'

const CustomHookComponent: FC = () => {
  return (
    <div>
      <h2 className="title is-4">CustomHook</h2>
      <div className="columns">
        <div className="column is-half-desktop">
          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                customHookで共通処理をまとめる
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <DocTitleUpdateComponent />
                <br/>
                <DocTitleUpdateTwoComponent />
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
                customHookで共通処理をまとめる2
              </p>
            </header>
            <div className="card-content">
              <div className="content">
                <FormComponent />
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

export default CustomHookComponent
