import React, { createContext, useState } from 'react'
import fixtures from '../db/fixtures'
export const LiveMatchContext = createContext()

export function MatchProvider(props) {
  const [liveMatches, setLiveMatches] = useState(null)

  return (
    <LiveMatchContext.Provider value={[liveMatches, setLiveMatches]}>
      {props.children}
    </LiveMatchContext.Provider>
  )
}
