import React, {  useContext, useState } from "react";

const AppContext = React.createContext();



//Creating a provider
const AppProvider = ({ children }) => {
    const [showSearch, setShowSearch] = useState(false);

    return <AppContext.Provider value={ {showSearch,setShowSearch }}>{children}</AppContext.Provider>

}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }