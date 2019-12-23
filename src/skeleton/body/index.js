import React from 'react';
import Routes from '../routes';

export default function Body() {
    return (
        <main style={{ gridArea: 'main' }}>
            <Routes />
        </main>
    );
}