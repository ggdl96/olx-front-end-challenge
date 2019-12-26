import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 300px;
    height: 300px;
    position: absolute;
    background: #FFF;
    margin-left: calc(50% - 300px);
    border-radius: 6px;
`;

const ModalHeader = styled.header`
    display: flex;
    justify-content: end;
`

const SpanStyled = styled.span`
    cursor: pointer;
`;
export default function({ content, onCloseModal }) {
    const onClose = () => {
        onCloseModal();
    }
    return (
        <ModalContainer>
            <ModalHeader><SpanStyled onClick={onClose}>[x]</SpanStyled></ModalHeader>
            {content}
        </ModalContainer>
    );
}