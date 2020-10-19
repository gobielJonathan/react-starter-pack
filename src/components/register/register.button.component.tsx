import React from 'react'

interface IProps{}

const LoginButton : React.FC<IProps> = props => {
    return (
        <p><button className="login-btn">Register</button></p>
    )
}

export default LoginButton
