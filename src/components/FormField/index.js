import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FieldContainer = styled.div`
    position: relative;
    padding-top: 20px;
    margin-top:10px;
      
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

const Input = styled.input`
  border: 0;
  border-bottom: 2px solid #DB202C;
  outline: none;
  transition: .2s ease-in-out;
  box-sizing: border-box;
  color:#000 !important;
`;

function FormField({
  value, onChange, type, name, label, className,
}) {
  const fieldId = `${name}_id`;
  const tag = type === 'textarea' ? 'textarea' : 'input';

  return (
    <FieldContainer>
      <Input
        as={tag}
        type={type}
        name={name}
        id={fieldId}
        value={value}
        onChange={onChange}
        className={className}
        pattern=".+"
        required
      />
      <label htmlFor={fieldId}>{label}</label>
    </FieldContainer>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default FormField;
