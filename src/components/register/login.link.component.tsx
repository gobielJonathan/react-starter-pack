import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

interface IProps{
    updateScreen: any
} 

const RegisterLink : React.FC<IProps> = props => {
    return (
        <a href="#" className="register-link" onClick={props.updateScreen}>
            <FontAwesomeIcon icon={faArrowLeft}/>
            <label>Already have an Account</label>
        </a>
    )
}

export default RegisterLink