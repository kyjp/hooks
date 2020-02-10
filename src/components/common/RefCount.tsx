import React, { FC, useState, useEffect, useRef } from 'react'

const RefCount = () => {
  const [count, setCount] = useState(0)
  const intervalRef: any = useRef()
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1)
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])
  return (
    <>
      <p>{count}</p>
      <div className="buttons"><button className="button is-primary" onClick={() => clearInterval(intervalRef.current)}>ストップ</button></div>
    </>
  )
}

export default RefCount
