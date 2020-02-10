import { useEffect } from 'react'

const useDocumentTitle = (count: number) => {
  useEffect(() => {
    document.title = `カウント ${count}`
  }, [count])
}

export default useDocumentTitle
