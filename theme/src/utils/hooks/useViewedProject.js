import React, { useState, createContext, useContext } from 'react'

const Context = createContext()
export const useViewedProject = () => useContext(Context)

const ViewdProjectProvider = ({ children }) => {
  const [viewedProjects, setViewedProjects] = useState([])

  const addViewedProject = project => {
    const viewed = new Set([...viewedProjects, project])
    setViewedProjects(Array.from(viewed))
  }

  return (
    <Context.Provider value={{
      viewedProjects,
      addViewedProject
    }}>
      {children}
    </Context.Provider>
  )
}

export default ViewdProjectProvider
