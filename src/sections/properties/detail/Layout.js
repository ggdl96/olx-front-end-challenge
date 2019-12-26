import React from 'react';
import styled from 'styled-components';

import Gallery from './components/Gallery';
import Article from '../../../common/Article';

import { getStatus } from '../../../foundations/properties';
import { $grayLightColor } from '../../../styles/constants';

const mainSectionWidth = '80%';
const galleryContainerHeight = '280px';

const SideBarDetailStyled = styled.aside`
    flex-basis: calc(100% - ${mainSectionWidth} - 1px);
    border-left: 1px ${$grayLightColor} solid;
    padding-left: 10px;
`;

const SpanItemStyled = styled.span`
    display: block;
`;

const MainSectionStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: ${mainSectionWidth};
`;

const MainSectionRowStyled = styled.div`
    width: 100%;
    border-bottom: 1px ${$grayLightColor} solid;
    background: ${(props) => props.darker ? '#e0e1e2' : 'unset'};
`;

const GalleryContainer = styled.div`
    height: ${galleryContainerHeight};
`;

function renderGeneralPanel({ rooms, bedrooms, garages, m2, m2_covered, year }) {
    return (
        <Article
            header="General"
            content={
                <>
                    {rooms && <SpanItemStyled>{`Habitaciones: ${rooms}`}</SpanItemStyled>}
                    {bedrooms && <SpanItemStyled>{`Dormitorios: ${bedrooms}`}</SpanItemStyled>}
                    {garages && <SpanItemStyled>{`Garages: ${garages}`}</SpanItemStyled>}
                    {m2 && <SpanItemStyled>{`M2: ${m2}`}</SpanItemStyled>}
                    {m2_covered && <SpanItemStyled>{`M2 cubiertos: ${m2_covered}`}</SpanItemStyled>}
                    {year && <SpanItemStyled>{`Año: ${year}`}</SpanItemStyled>}
                </>
            }
        />
    );
}

function renderSidebar({
    currency,
    price,
    status,
    transaction_type,
    payment,
    tags,
    disposition,
}, openContactModal) {
    function handleOnClickContact(event) {
        event.preventDefault();
        openContactModal()
    }

    return (
        <SideBarDetailStyled>
            <MainSectionRowStyled>
                <h1>{currency.name} {price}</h1>
                <SpanItemStyled>{getStatus(status)}</SpanItemStyled>
            </MainSectionRowStyled>

            <MainSectionRowStyled>
                <SpanItemStyled>{`tipo: ${transaction_type.name}`}</SpanItemStyled>
                {
                    payment && payment.length
                        ? <SpanItemStyled>Tipos de pago: {payment && payment.join(', ')}</SpanItemStyled>
                        : null
                }
            </MainSectionRowStyled>
            <MainSectionRowStyled>
                {
                    tags && tags.length
                        ? <SpanItemStyled>Etiquetas: {tags && tags.join(', ')}</SpanItemStyled>
                        : null
                }
                {
                    disposition && disposition.length
                        ? <SpanItemStyled>disposición: {disposition.join(', ')}</SpanItemStyled>
                        : null
                }
            </MainSectionRowStyled>

            <MainSectionRowStyled darker>
                <button onClick={handleOnClickContact}>Contactar</button>
            </MainSectionRowStyled>
        </SideBarDetailStyled>
    )
}


export default function Details({ data, openContactModal }) {
    const {
        description,
        data: values,
    } = data;

    return (
        <>
            <MainSectionStyled>
                <MainSectionRowStyled>
                    <GalleryContainer>
                        {
                            values.images &&
                                values.images.length ?
                                <Gallery
                                    values={values}
                                    imageStyle={{ height: galleryContainerHeight }}
                                />
                                : null
                        }
                    </GalleryContainer>
                </MainSectionRowStyled>

                <MainSectionRowStyled>
                    <p>{description}</p>
                    <h2>Detalle</h2>
                    {renderGeneralPanel(values)}
                    {
                        values.amenities && values.amenities.length
                            ? (
                                <Article
                                    header="Comodidades"
                                    content={
                                        <SpanItemStyled>
                                            {values.amenities.map(amenity => amenity.name).join(', ')}
                                        </SpanItemStyled>
                                    }
                                />
                            ) : null
                    }
                </MainSectionRowStyled>

            </MainSectionStyled>
            {renderSidebar(values, openContactModal)}
        </>
    )
}
