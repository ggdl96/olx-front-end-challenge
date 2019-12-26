import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    padding: 4px;
`;
const FormContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const FormActionsContainer = styled.div`
    display: flex;
    justify-content: end;
    padding-top: 10px;
`;

export default function Form({ content, onSubmit, onSuccess, onFailure, submitLabel }) {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }
    return (
        <FormStyled>
            <FormContent>
                {content}
            </FormContent>
            <FormActionsContainer>
                <input type="submit" onClick={handleOnSubmit} value={submitLabel}/>
            </FormActionsContainer>
        </FormStyled>
    )
};
