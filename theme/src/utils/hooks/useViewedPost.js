import React, { useState, createContext, useContext } from "react"

const Context = createContext()
export const useViewedPost = () => useContext(Context)

const ViewdPostProvider = ({ children }) => {
  const [viewedPosts, setViewedPosts] = useState([])

  const addViewedPost = post => {
    const viewed = new Set([...viewedPosts, post])
    setViewedPosts(Array.from(viewed))
  }

  return (
    <Context.Provider value={{
      viewedPosts,
      addViewedPost
    }}>
      {children}
    </Context.Provider>
  )
}

export default ViewdPostProvider
