import React, { Component } from 'react'

interface IProps{} 

const LoginButton : React.FC<IProps> = props => {
    return (
        <p><button className="login-btn">Log In</button></p>
    )
}

export default LoginButton