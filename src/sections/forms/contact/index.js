import React, { useState } from 'react';
import Input from '../../../common/Form/components/Input';

export default function ContactForm() {
    const [inputValue, setInputValue] = useState('');

    const onChange = (event) => setInputValue(event.target.value);

    return (
        <form>
            <Input label={'some label: '} placeholder={'first'} defaultValue={inputValue} onChange={onChange}/>
            <button>click me {inputValue}</button>
        </form>
    );
}