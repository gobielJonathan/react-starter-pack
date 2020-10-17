import React, { Component } from 'react'
import './login.component.scss'
import PersonPicture from '../../images/person.png'
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons'
import LoginField from './login.field.component'
import RegisterLink from './register.link.component'
import LoginButton from './login.button.component'

class Login extends Component {
    render(){
        return (
            <>
                <div className="login-wrapper">
                    <div className="split left">
                        <div className="inner-left">
                            <img src={PersonPicture} alt=""/> <br/>
                            <h2>Hello, there!</h2>
                        </div>
                    </div>
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
                            <RegisterLink/>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Login