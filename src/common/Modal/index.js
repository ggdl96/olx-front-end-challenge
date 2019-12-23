import React from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
    width: 300px;
    height: 300px;
    position: absolute;
    background: #FFF;
    margin-left: calc(50% - 300px);
    border-radius: 6px;
`
export default function({ content, onCloseModal }) {
    const onClose = () => {
        onCloseModal();
    }
    return (
        <ModalContainer>
            <header><span onClick={onClose}>[x]</span></header>
            {content}
        </ModalContainer>
    );
}