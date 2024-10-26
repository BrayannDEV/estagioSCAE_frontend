'use client'

const { createContext, useState } = require("react")

const UserContext = createContext();

export const UserProvider = ({children}) => {

    let cliente = null;
    if(typeof localStorage != "undefined") {
        cliente = JSON.parse(localStorage.getItem("cliente"))
    }

    const [user, setUser] = useState(cliente);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;
