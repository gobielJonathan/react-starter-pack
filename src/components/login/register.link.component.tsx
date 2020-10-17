import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface IProps{} 

const RegisterLink : React.FC<IProps> = props => {
    return (
        <a href="#" className="register-link">
            <label>Create an Account</label>
            <FontAwesomeIcon icon={faArrowRight}/>
        </a>
    )
}

export default RegisterLink