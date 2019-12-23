import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

function CustomLink({ history, to, onClick, tag: Tag, ...rest }) {
    function handleOnClick(event) {
        onClick(event);
        history.push(to)
    }
    return (
        <Tag
        {...rest}
        onClick={handleOnClick}
    />)
};

CustomLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    onClick: PropTypes.func
};
CustomLink.defaultProps = {
    onClick: () => {}
};

export default  withRouter(CustomLink);
