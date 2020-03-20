import React, { createContext } from 'react'

export const NavContext = createContext()

const NavContextProvider = () => {



    return (
        <div>
            <NavContext.Provider value={}>

            </NavContext.Provider>
        </div>
    )
}

export default NavContextProvider
