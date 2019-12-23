import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { $defaultLinkColor } from '../../styles/constants';

const NavLinkList = styled.ul`
    box-sizing: border-box;
    margin: 2px;
    padding: 4px 0px 4px 2px;
    list-style: none;

`;

const NavLinkStyled = styled(NavLink)`
    padding: 2px;
    text-decoration-line: none;
    color: ${$defaultLinkColor};

    :hover {
        font-weight: bold;
    }
`;

function renderItems(items) {
    return items.map(item => (
        <li
            key={item.key}
        >
            <NavLinkStyled to={encodeURI(item.url)}>{item.name}</NavLinkStyled>
        </li>
    ));
}
function Nav(props) {
    return (
        <NavLinkList>
            {renderItems(props.items)}
        </NavLinkList>
    );
}

Nav.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes
                .oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ])
                .isRequired,
            url: PropTypes.string.isRequired,
        })
    ),
};

export default Nav;
