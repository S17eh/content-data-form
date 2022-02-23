import React, {useContext} from 'react';
import AuthContext from "../../store/auth-context"

import classes from './Navigation.module.css';

const Navigation = (props) => {

    const ctx = useContext(AuthContext);

    return (
        <nav className={classes.nav}>
            <ul>
                {ctx.isLoggedIn && (
                    <li>
                        <a href="https://this-page-intentionally-left-blank.org/" rel="noreferrer"
                           target="_blank">Users</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <a href="https://this-page-intentionally-left-blank.org/" rel="noreferrer"
                           target="_blank">Admin</a>
                    </li>
                )}
                {ctx.isLoggedIn && (
                    <li>
                        <button onClick={ctx.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;