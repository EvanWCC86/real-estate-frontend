import React, {useState, useContext, createContext} from 'react'


const AppContext = createContext();


const AppProvider = ({children}) => {
    const [showSidebar, setShowSidebar]= useState(false);
   
    const toggleSidebar = () => {
   setShowSidebar(!showSidebar)
  }

    return (
        <AppContext.Provider value={{
            showSidebar,
            toggleSidebar,
            
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider}