import styled from 'styled-components';

const Image = styled.img`
    width: ${props => props.width};
    height: ${props => props.height};
    object-fit: cover;
`;

export default Image;
