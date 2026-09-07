import {ReactNode }from 'react'

interface AppProviderProps { 
    children: ReactNode
}
function AppProvider({ children }: AppProviderProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export default AppProvider
