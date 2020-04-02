import React, { useState, useContext } from 'react'
import { Payload, Auth } from '../models';
import { AuthService } from '../services';
import { FetchAPIContext } from './fetch-api.provider';

interface IProps { }

interface IAuth {
    login(payload: Payload): void,
    auth: Auth
}

const authService = new AuthService()

export const AuthContext = React.createContext({
    ...{} as IAuth
});

const AuthProvider: React.FC<IProps> = props => {
    const { fetch } = useContext(FetchAPIContext);

    const [auth, setAuth] = useState<Auth>({} as Auth)

    function login(payload: Payload) {
        fetch(
            () => authService.login(payload),
            res => console.log(res),
            error => console.error(error)
        )
    }

    return (
        <AuthContext.Provider value={{
            auth,
            login
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider