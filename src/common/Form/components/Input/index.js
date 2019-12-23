import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $primaryColor } from '../../../../styles/constants';

const InputStyled = styled.input`
    background: #FFFFFF;
    border-radius: 4px;

    : focus {
        border: 2px solid ${$primaryColor};
    }
`;

const Input = ({ label, defaultValue, onChange, placeholder, type }) => {

    return (
        <>
            <label>{label}</label>
            <InputStyled
                defaultValue={defaultValue}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
            />
        </>
    );
};

Input.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([
        'text',
        'number',
        'password',
        'email'
    ])
};

Input.defaultProps = {
    label: null,
    placeholder: null,
    type: 'text'
};

export default Input;
