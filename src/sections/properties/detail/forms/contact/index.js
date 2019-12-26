import React from 'react';
import Form from '../../../../../common/Form';
import Input from '../../../../../common/Form/components/Input';


export default function ContactForm({ onSubmit, onFailure, values, onChange, validFields }) {
    return (
        <Form
            content={
                <>
                    <Input
                        id='name'
                        label="Nombre:"
                        value={values.name}
                        onChange={(props) => onChange(props)}
                        isIvalid={validFields.name}
                    />
                    <Input
                        id='email'
                        label="Email:"
                        value={values.email}
                        onChange={(props) => onChange(props)}
                        isIvalid={validFields.email}
                    />
                    <Input
                        id="message"
                        label="Mensaje:"
                        value={values.message}
                        onChange={(props) => onChange(props)}
                        isIvalid={validFields.message}
                    />
                </>
            }
            onSubmit={onSubmit}
            onFailure={onFailure}
            submitLabel="Consultar"
        />
    );
};
