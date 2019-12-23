import React from 'react';
import styled from 'styled-components'
import { service } from '../../../entities/Property';
import {useAsyncFetch} from '../../../utils/axios';
import CustomLink from '../../../common/CustomLink';

const Ul = styled.ul`
    margin: 0px;
    padding: 2px;
`;

const ListItemStyled = styled.li`
    display: flex;
    justify-content: stretch;
    align-items: stretch;
    margin: 0;
    padding: 2px;
    box-sizing: border-box;
    cursor: pointer;

    :hover {
        border: 1px solid #FFC864;
        background: #fff;
    }
`;

const ImageContainer = styled.div`
    width: 160px;
    height: 160px;
    display: flex;
`

const Image = styled.img`
    width: 160px;
    height: 160px;
    object-fit: cover;
`;
function renderPropertyItem(item) {
    return (
        <CustomLink key={item.id} to={`/${item.id}`} tag={ListItemStyled}>
            <ImageContainer>
                {item.images && item.images[0] && item.images[0].medium ? <Image src={item.images[0].medium} alt="img"></Image> : null}
            </ImageContainer>
            <div>
                <h1>{item.title}</h1>
                <p>{item.short_description}</p>
                <span>{item.property_type.name}</span>
                <span>{item.transaction_type.name}</span>
                <span>price: {item.currency.name}</span><span>{item.price}</span>
                <span>tags: ...</span>
            </div>
        </CustomLink>
    );
}

function renderProperties({isFetching, data = [], error}) {
    if (error) {
        return 'Error';
    }

    return (
        <Ul>
            {
                isFetching
                ? 'loading'
                : data ? data.map(renderPropertyItem) : []
            }
        </Ul>
    )
}
export default (props) => {
    const [response] = useAsyncFetch(service);

    return (
        <>
            <h1>Properties</h1>
            {renderProperties(response)}
        </>
    );
};
