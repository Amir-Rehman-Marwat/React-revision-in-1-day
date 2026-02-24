import React, { createContext} from 'react'
export const ThemeContext=createContext("light")
import { BrowserRouter } from 'react-router'
function ThemeContextProvider({children}) {
  return (
  <ThemeContext.Provider value='light'>

    <BrowserRouter>
    {children}
    </BrowserRouter>
  </ThemeContext.Provider>
  )
}

export default ThemeContextProvider