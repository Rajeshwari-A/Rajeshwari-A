import React, { createContext, useContext, useState } from 'react';
import {auth} from '../Firebase/fire';


const AuthContext = createContext();


export function useAuth() {
    return useContext(AuthContext) 
} 


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value} >
            {children}
        </AuthContext.Provider >
    )
    
}

const FirebaseContext = React.createContext(null);
export default FirebaseContext;