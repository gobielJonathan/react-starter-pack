import React, { Component } from 'react'
import './login.component.scss'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import LoginField from './login.field.component'
import RegisterLink from './register.link.component'
import LoginButton from './login.button.component'

interface IProps {
    updateScreen: any
}

class Login extends Component<IProps> {
    render(){
        return (
            <>
                <div className="split right">
                    <div className="inner-right">
                        <div className="login-fields">
                            <h2>Member Login</h2>
                            <LoginField icon={faEnvelope} placeholder="Email Address"/>
                            <LoginField icon={faKey} placeholder="Password"/>
                            <LoginButton/>
                        </div>
                        <div className="forget-password">
                            <a href="#">Forget Password?</a>
                        </div>
                    </div>
                    <div className="register-field">
                        <RegisterLink updateScreen={this.props.updateScreen}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Login