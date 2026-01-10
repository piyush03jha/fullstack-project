import { createContext, useContext, useEffect, useState } from "react";
import { authStatus, logoutUser } from "../service/authApi";

const SessionContext = createContext();

export const useSession = () => useContext(SessionContext);

export const SessionProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const { data } = await authStatus();
                setIsLoggedIn(true);
                setUser(data);
            } catch (error) {
                setIsLoggedIn(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkAuthStatus();
        const interval = setInterval(checkAuthStatus, 5 * 60 * 1000); // Check every 5 minutes
        return () => clearInterval(interval);
    }, []);
            
    
    const login = (userData) => {
        setIsLoggedIn(true)
        setUser(userData)
    }
    const logout = async () => {
        try {
            await logoutUser();
            setIsLoggedIn(false);
            setUser(null);
        } catch (error) {
            console.error("Failed to logout", error);
        }
    }
    return(
        <SessionContext.Provider value={{isLoggedIn, loading, user, login, logout}}>
            {children}
        </SessionContext.Provider>
    )
}