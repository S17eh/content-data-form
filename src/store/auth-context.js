import React, {useEffect, useState} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: (email, password) => {},
    onLogout: () => {}
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("loggedIn") === "1") {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false);
        }
        console.log("checking login")

        return () => {
        }
    }, [])

    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        setIsLoggedIn(true);
        localStorage.setItem("loggedIn", 1);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.setItem("loggedIn", 0);
    };

    return (
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
            onLogin: loginHandler
        }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}


export default AuthContext;


    
