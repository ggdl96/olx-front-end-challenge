import React from 'react';
import styled from 'styled-components';

const FormContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Form({ content, onSubmit, onSuccess, onFailure }) {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSubmit();
    }
    return (
        <form>
            <FormContent>
                {content}
            </FormContent>

            <input type="submit" onClick={handleOnSubmit} value="Consultar"/>
        </form>
    )
}