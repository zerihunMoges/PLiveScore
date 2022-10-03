import React, { createContext, useState } from 'react'

export const FixturesPageContext = createContext()
const pageNumber = 1
export function FixturesPageProvider(props) {
  const [page, setPage] = useState(pageNumber)

  return (
    <FixturesPageContext.Provider value={[page, setPage]}>
      {props.children}
    </FixturesPageContext.Provider>
  )
}
