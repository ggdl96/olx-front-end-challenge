import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $primaryColor, $dangerColor } from '../../../../styles/constants';

const InputStyled = styled.input`
    background: #FFFFFF;
    border-radius: 4px;

    : focus {
        border: 2px solid ${$primaryColor};
    }
`;

const InputSpanError = styled.span`
    color:${$dangerColor};
    width: 100%;
`

const Input = ({
    id,
    label,
    defaultValue,
    onChange,
    placeholder,
    type,
    validationMessage,
    isIvalid,
}) => {

    const valid = isIvalid === 'undefined' || !validationMessage;
    return (
        <>
            <label>{label}</label>
            <InputStyled
                key={id}
                defaultValue={defaultValue}
                onChange={(event) => onChange({ [id]: event.target.value })}
                placeholder={placeholder}
                type={type}
            />
            {
                !valid
                    ? <InputSpanError>{validationMessage || 'campo no válido'}</InputSpanError>
                    : null
            }
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'email'
    ]),
    id: PropTypes.string.isRequired,
    validationMessage: PropTypes.string,
    isIvalid: PropTypes.bool,
};

Input.defaultProps = {
    label: null,
    placeholder: null,
    type: 'text',
    defaultValue: '',
    validationMessage: null,
    isIvalid: false,
};

export default Input;
