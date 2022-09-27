import React, { createContext, useState } from 'react'
import fixtures from '../db/fixtures'
export const MatchContext = createContext()

export function MatchProvider(props) {
  const [match, setMatch] = useState(null)

  return (
    <MatchContext.Provider value={[match, setMatch]}>
      {props.children}
    </MatchContext.Provider>
  )
}
