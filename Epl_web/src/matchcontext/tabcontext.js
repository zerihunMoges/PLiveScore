import React, { createContext, useState } from 'react'

export const TabContext = createContext()

export function TabProvider(props) {
  const [value, setValue] = useState(1)

  return (
    <TabContext.Provider value={[value, setValue]}>
      {props.children}
    </TabContext.Provider>
  )
}
