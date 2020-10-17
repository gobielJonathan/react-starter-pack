import React, { Component } from 'react'
import './register.component.scss'
import { faEnvelope, faKey, faUser, faPhone, faMapMarked } from '@fortawesome/free-solid-svg-icons'
import RegisterField from './register.field.component'
import LoginLink from './login.link.component'
import RegisterButton from './register.button.component'

interface IProps {
    updateScreen: any
}

class Register extends Component<IProps> {
    render(){
        return (
            <>
                <div className="split right">
                    <div className="inner-right">
                        <div className="login-fields">
                            <h2>New Member</h2>
                            <RegisterField icon={faUser} placeholder="Name"/>
                            <RegisterField icon={faEnvelope} placeholder="Email Address"/>
                            <RegisterField icon={faPhone} placeholder="Phone Number"/>
                            <RegisterField icon={faKey} placeholder="Password"/>
                            <RegisterField icon={faMapMarked} placeholder="Address"/>
                            <RegisterButton/>
                        </div>
                    </div>
                    <div className="register-field">
                        <LoginLink updateScreen={this.props.updateScreen}/>
                    </div>
                </div>
            </>
        )
    }
}

export default Register