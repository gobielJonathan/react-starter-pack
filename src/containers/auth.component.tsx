import React, { Component, useState } from 'react'
import PersonPicture from '../images/person.png'
import Login from '../components/login/login.component'
import Register from '../components/register/register.component'

class Auth extends Component {
    state = { isLogin: true}

    updateScreen = () => {
        this.setState({isLogin : (this.state.isLogin ? false : true)})
    }

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
                    {this.state.isLogin ? <Login updateScreen={this.updateScreen}/> : <Register updateScreen={this.updateScreen}/>}
                </div>
            </>
        )
    }
}

export default Auth