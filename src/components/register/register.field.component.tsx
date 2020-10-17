import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'

interface IProps{
    icon: IconDefinition;
    placeholder: string;
} 

const LoginField : React.FC<IProps> = props => {
    return (
        <div className="field">
             <FontAwesomeIcon icon={props.icon} />
             <input type="text" placeholder={props.placeholder}/>
         </div>
    )
}

export default LoginField