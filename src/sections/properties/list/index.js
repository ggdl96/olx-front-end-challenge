import React from 'react';
import styled from 'styled-components'
import { service } from '../../../entities/Property';
import {useAsyncFetch} from '../../../utils/axios';
import CustomLink from '../../../common/CustomLink';
import { getStatus } from '../../../foundations/properties';

import { $grayLightColor } from '../../../styles/constants';

const imageContainerDimensions = {
    width: '160px',
    height: '160px',
};

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
    width: ${imageContainerDimensions.width};
    height: ${imageContainerDimensions.height};
    object-fit: cover;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: calc(100% - ${imageContainerDimensions.width});
`;

const InfoContainerTitle = styled.h1`
    width: 100%;
`;

const InfoContainerExtra = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const InfoContainerDescription = styled.p`
    border-bottom: 1px ${$grayLightColor} solid;
`;

function renderPropertyItem(item) {
    return (
        <CustomLink key={item.id} to={`/${item.id}`} tag={ListItemStyled}>
            <ImageContainer>
                {item.images && item.images[0] && item.images[0].medium ? <Image src={item.images[0].medium} alt="img"></Image> : null}
            </ImageContainer>
            <InfoContainer>
                <InfoContainerTitle>{item.title}</InfoContainerTitle>
                <InfoContainerDescription>{item.short_description}</InfoContainerDescription>
                <InfoContainerExtra>
                    <span>Valor: {item.currency.name} {item.price}</span>
                    <span>{getStatus(item.status)}</span>
                    <span>{item.property_type.name}</span>
                    <span>{item.transaction_type.name}</span>
                    <span>{item.tags.join(', ')}</span>
                </InfoContainerExtra>
            </InfoContainer>
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
export default () => {
    const [response] = useAsyncFetch(service);

    return (
        <>
            <h1>Propiedades</h1>
            {renderProperties(response)}
        </>
    );
};
