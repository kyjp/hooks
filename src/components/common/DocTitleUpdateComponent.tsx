import React, { FC, useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle'

const DocTitleUpdateComponent: FC = () => {
  const [count, setCount] = useState(0)
  useDocumentTitle(Number(count))
  return (
    <div>
      <div className="buttons"><button className="button is-primary" onClick={() => setCount(count + 1)}>count - {count}</button></div>
    </div>
  )
}

export default DocTitleUpdateComponent
