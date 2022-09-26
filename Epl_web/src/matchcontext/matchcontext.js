import React, { createContext, useState } from 'react'
import fixtures from '../db/fixtures'
export const MatchContext = createContext()
export function MatchProvider(props) {
  const [matches, setMatches] = useState([fixtures])

  return (
    <MatchContext.Provider value={[matches, setMatches]}>
      {props.children}
    </MatchContext.Provider>
  )
}
