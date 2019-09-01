import React from 'react' ;
import './style.css'

export const Input = (props) =>(
    <input className={`border-input ${props.className}`} id={props.id} name={props.name} 
        type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.onChange} />
) 