import { useState, useEffect } from 'react'
import { globalHistory } from '@reach/router'

export const useLocation = () => {
  const initialState = {
    location: globalHistory.location
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    const removeListener = globalHistory.listen(({ location }) => {
      const newState = Object.assign({}, initialState, { location })
      setState(newState)
    })
    return () => {
      removeListener()
    }
  }, [ initialState ])

  return state
}
