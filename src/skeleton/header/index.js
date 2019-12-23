import React from 'react';
import styled from 'styled-components';

import { $primaryColor, $alternativeColor } from '../../styles/constants';

const StyledHeader = styled.header`
    background: ${$primaryColor};
    height: 40px;
    border-bottom: 2px solid ${$alternativeColor};
    display: flex;
    flex-basis: 100%;
    align-items: stretch;
    grid-area: header;
`;

function Header() {
    return (
        <StyledHeader />
    );
}

export default Header;
