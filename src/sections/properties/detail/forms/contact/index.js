import React from 'react';
import Form from '../../../../../common/Form';
import Input from '../../../../../common/Form/components/Input';


export default function ContactForm({ onSubmit, onFailure, values, onChange, invalidValues }) {
    return (
        <Form
            content={
                <>
                    <Input
                        id='name'
                        label="Nombre:"
                        onChange={(props) => onChange(props)}
                        validationMessage={invalidValues.name}
                    />
                    <Input
                        id='email'
                        label="Email:"
                        onChange={(props) => onChange(props)}
                        validationMessage={invalidValues.email}
                    />
                    <Input
                        id="message"
                        label="Mensaje:"
                        onChange={(props) => onChange(props)}
                        validationMessage={invalidValues.message}
                    />
                </>
            }
            onSubmit={onSubmit}
            onFailure={onFailure}
            submitLabel="Consultar"
        />
    );
};
