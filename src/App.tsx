import React, { FC, useState, createContext } from 'react';

import UseStateComponent from './components/UseStateComponent'
import UseEffectComponent from './components/UseEffectComponent'
import UseContextComponent from './components/UseContextComponent'
import UseReducerComponent from './components/UseReducerComponent'
import UseCallbackComponent from './components/UseCallbackComponent'
import UseMemoComponent from './components/UseMemoComponent'
import UseRefComponent from './components/UseRefComponent'
import CustomHookComponent from './components/CustomHookComponent'

/* Contextを使用するために定義
typescriptを使った場合空ではエラーが出る
https://qiita.com/Statham/items/1567055575acb4421f23
*/
export const UserContext = createContext({} as any)
export const LanguageContext = createContext({} as any)

const App: FC = () => {
  const [user, setUser] = useState({ name: 'Wada', age: '24' })
  const [language, setLanguage] = useState('English')
  return (
    /*UserContextで囲ったコンポーネント、階層コンポーネントでvalueが使用可能になる
    ネスとすることで複数のcontextが使用可能
    */
    <UserContext.Provider value={user}>
      <section className="section">
        <h1 className="title is-3">ReactHooksについて</h1>
        <UseStateComponent />
        <br />
        <UseEffectComponent />
        <br />
        <LanguageContext.Provider value={language}>
          <UseContextComponent />
        </LanguageContext.Provider>
        <br />
        <UseReducerComponent />
        <br />
        <UseCallbackComponent />
        <br />
        <UseMemoComponent />
        <br />
        <UseRefComponent />
        <br />
        <CustomHookComponent />
      </section>
    </UserContext.Provider>
  );
}

export default App;
