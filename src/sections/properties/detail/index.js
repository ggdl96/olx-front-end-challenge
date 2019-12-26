import React, { useState } from 'react';
import styled from 'styled-components';

import { useAsyncFetch } from '../../../utils/axios';
import { service } from '../../../entities/Property';
import Modal from '../../../common/Modal';
import ContactForm from './forms/contact';
import Details from './Layout';

const SectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
export default function PropertyDetail(props) {
    const id = props.match.params.id;
    const [response] = useAsyncFetch(service, { id });
    const [modalState, setModalState] = useState({
        isOpen: false,
        values: {},
        invalidValues: {}
    });

    const onSubmitContactForm = (values) => {
        const nameValidations = name => name && name.length && name.length <= 150
            ? /([a-zA-ZäÄëËöÖÜüáéíóú])/g.test(name)
            : false;

        const emailValidations = email => email && email.length >= 3;

        const messageValidations = message => message && message.length && message.length <= 500;

        let invalidFields = {
            ...!nameValidations(values.name) ? {name: 'Name is required. max length 150 characters.' } : {},
            ...!emailValidations(values.email) ? { email: 'Not valid email.'} : {},
            ...!messageValidations(values.message) ? { message: 'Message is required. Max length is 500' } : {},
        };

        setModalState({
            ...modalState,
            values: { ...(Object.keys(invalidFields).length === 0) ? {} : values },
            isOpen: !(Object.keys(invalidFields).length === 0),
            invalidValues: {...invalidFields}
        });
    };

    return (
        <SectionStyled>
            {
                response.isFetching
                    ? 'loading'
                    : response.data &&
                    <Details data={response}
                        openContactModal={() =>
                        setModalState({ ...modalState, invalidValues: {}, isOpen: true })}
                    />
            }
            {
                modalState.isOpen
                    && (<Modal
                            content={
                            <ContactForm
                                onSubmit={() => onSubmitContactForm(modalState.values)}
                                onChange={(props) => {
                                    setModalState({
                                        ...modalState,
                                        values: { ...modalState.values, ...props }
                                    })
                                }}
                                invalidValues={modalState.invalidValues}
                            />
                        }
                            onCloseModal={() => {
                                setModalState({ ...modalState, isOpen: false })
                            }}
                        />)
                    }
        </SectionStyled>
    )
}