import React from 'react';
import styled from 'styled-components';
import NavLinkList from '../../common/NavLinkList'

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
        <StyledHeader>
            <NavLinkList
                items={[{ key: 'link_to_properties', name: 'Propiedades', url: '/' }]} />
            </StyledHeader>
    );
}

export default Header;
