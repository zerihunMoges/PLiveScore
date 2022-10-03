import React, { createContext, useState } from 'react'

export const FixturesContext = createContext()

export function FixturesProvider(props) {
  const [fixtures, setFixtures] = useState([])

  return (
    <FixturesContext.Provider value={[fixtures, setFixtures]}>
      {props.children}
    </FixturesContext.Provider>
  )
}
