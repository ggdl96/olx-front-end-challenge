import React from 'react';
import Form from '../../../../../common/Form';
import Input from '../../../../../common/Form/components/Input';


export default function ContactForm({ onSubmit }) {
    return (
        <Form
            content={
                <>
                    <Input label="Nombre:"/>
                    <Input label="Email:"/>
                    <Input label="Mensaje:"/>
                </>
            }
            onSubmit={onSubmit}
        />
    );
}