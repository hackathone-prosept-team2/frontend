import { useEffect } from "react"

const useChangeTitle = (newTitle) => {
  useEffect(() => {
    document.title = newTitle
    return () => {
      document.title = "PROSEPT"
    }
  }, [newTitle])
}

export default useChangeTitle