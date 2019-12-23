import React from 'react';
import styled from 'styled-components';

import Header from './skeleton/header';
import Main from './skeleton/body';

const App = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 12.5%);
    grid-template-rows: auto;
    grid-template-areas: 
    "header header header header header header header header"
    "main main main main main main main main"
    "footer footer footer footer footer footer footer footer";
`;

export default () => (
    <App>
        <Header />
        <Main />
    </App>
);
