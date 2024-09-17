import React, { createContext, useState } from 'react'

const AuthContext=createContext();
function AuthProvider({children}) {

    const [isLogin,setIsLogin]=useState(false);
    const [role,setRole]=useState("user")
  return (
    <AuthContext.Provider value={{isLogin,setIsLogin,role,setRole}}>
        {children}
    </AuthContext.Provider>
  )
}

export {AuthProvider,AuthContext}