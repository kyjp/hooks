import React, { FC, useState } from 'react'
import useInput from '../hooks/useInput'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { solarizedDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const FormComponent: FC = () => {
  const [firstName, bindFirstName, resetFirstName] = useInput('')
  const [lastName, bindLastName, resetLastName] = useInput('')
  const [flg, setFlg] = useState(false)
  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert('こんにちは！' + firstName + ' ' + lastName)
    resetFirstName()
    resetLastName()
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="">First Name</label>
          <input
            type="text"
            className="input"
            {...bindFirstName}
          />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input
            type="text"
            className="input"
            {...bindLastName}
          />
        </div>
        <br />
        <div className="buttons"><button className="button is-primary" type="submit">送信</button></div>
      </form>
      <br />
      <button className="button is-light" onClick={() => flg ? setFlg(false) : setFlg(true)}>codeを見る</button>
      {(() => {
        if (flg) {
          return (
            <>
              <br />
              <br />
              <SyntaxHighlighter language="javascript" style={solarizedDark} >
                {
                  `
  import React, { FC, useState } from 'react'
  import useInput from '../hooks/useInput'

  const FormComponent: FC = () => {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')
    const [flg, setFlg] = useState(false)
    const handleSubmit = (e: any) => {
      e.preventDefault()
      alert('こんにちは！' + firstName + ' ' + lastName)
      resetFirstName()
      resetLastName()
    }
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">First Name　</label>
            <input
              type="text"
              {...bindFirstName}
            />
          </div>
          <div>
            <label htmlFor="">Last Name　</label>
            <input
              type="text"
              {...bindLastName}
            />
          </div>
          <br/>
          <div className="buttons"><button className="button is-primary" type="submit">送信</button></div>
        </form>
      </div>
    )
  }

  export default FormComponent

  import {useState} from 'react'

  const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)
    const reset = () => {
      setValue(initialValue)
    }
    const bind = {
      value,
      onChange: (e: any) => {
        setValue(e.target.value)
      }
    }
    return [value, bind, reset]
  }

  export default useInput

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

export default FormComponent
