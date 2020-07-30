import React from 'react';
import styled from 'styled-components';


const FieldContainer = styled.div`
    position: relative;
    padding-top: 20px;
    margin-top:10px;
    
    .input{
        border: 0;
        border-bottom: 2px solid #DB202C;
        outline: none;
        transition: .2s ease-in-out;
        box-sizing: border-box;
        color:#000 !important;
    }

    
    .input + label{
        top: 15px;
        left: 5px; 
        right: 0;
        color: #555;
        display: flex;
        align-items: center;
        position: absolute;
        font-size: 1rem;
        cursor: text;
        transition: .2s ease-in-out;
        box-sizing: border-box;
    }

    .input,
    .input + label {
        width: 100%;
        height: 3rem;
        font-size: 1rem;
    }

    .input:valid,
    .input:focus {
        border-bottom: 2px solid #DB202C;  
    }

    .input:valid + label,
    .input:focus + label {
        color: #FFF;
        font-size: .8rem;
        top: -15px;
        pointer-events: none;
    }


    .color + label{
        display:none;
    }
    .color{
        width:100px;
        height:50px;
    }

`;

function FormField({ value, onChange, type, name, label , className}){

    return (
        <FieldContainer>
            <input 
                type={type}
                name={name}
                id={name}
                value={value} 
                onChange={onChange}
                className={className}
                pattern=".+"
                required />  
            <label htmlFor={name}>{label}</label>
        </FieldContainer>
    );
}


export default FormField;