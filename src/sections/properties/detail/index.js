import React, { useState } from 'react'
import styled from 'styled-components'
import { useAsyncFetch } from '../../../utils/axios';
import { service } from '../../../entities/Property';
import Article from '../../../common/Article';
import Modal from '../../../common/Modal';
import ContactForm from './forms/contact';

import { $grayLightColor } from '../../../styles/constants';

const mainSectionWidth = '80%';

const SectionStyled = styled.section`
    display: flex;
    flex-wrap: wrap;
`;

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
    background: ${(props) => props.darker ? '#e0e1e2': 'unset'};
`;

const GalleryContainer = styled.div`
    height: 200px;
`;

function renderGeneralPanel({ rooms, bedrooms, garages, m2, m2_covered, year }) {
    return (
        <Article
            header="General"
            content={
                <>
                    {rooms && <SpanItemStyled>{`Rooms: ${rooms}`}</SpanItemStyled>}
                    {bedrooms && <SpanItemStyled>{`Bed rooms: ${bedrooms}`}</SpanItemStyled>}
                    {garages && <SpanItemStyled>{`Garages: ${garages}`}</SpanItemStyled>}
                    <SpanItemStyled>{`M2: ${m2}`}</SpanItemStyled>
                    <SpanItemStyled>{`M2 covered: ${m2_covered}`}</SpanItemStyled>
                    {year && <SpanItemStyled>{`Year: ${year}`}</SpanItemStyled>}
                </>
            }
        />
    )
}

function renderSidebar({ currency, price, status, transaction_type, payment, tags }, openContactModal) {
    function handleOnClickContact(event) {
        event.preventDefault();
        console.log('open modal');
        openContactModal()
    }

    const statusMapper = {
        available: 'disponible',
        rented: 'rentado',
        reserved: 'reservado',
    }

    return (
        <SideBarDetailStyled>
            <MainSectionRowStyled>
                <SpanItemStyled>{currency.name} {price}</SpanItemStyled>
                <SpanItemStyled>{statusMapper[status]}</SpanItemStyled>
                <SpanItemStyled>{`tipo: ${transaction_type.name}`}</SpanItemStyled>
                <SpanItemStyled>Tipos de pago: {payment && payment.join(', ')}</SpanItemStyled>
                <SpanItemStyled>Etiquetas: {tags && tags.join(', ')}</SpanItemStyled>
                <SpanItemStyled>disposition</SpanItemStyled>
            </MainSectionRowStyled>

            <MainSectionRowStyled darker>
                <button onClick={handleOnClickContact}>Contactar</button>
            </MainSectionRowStyled>
        </SideBarDetailStyled>
    )
}
function renderDetails({ data } = {}, openContactModal) {
    const {
        description,
    } = data;

    return (
        <>
            <MainSectionStyled>
                main section
            <MainSectionRowStyled>
                <GalleryContainer></GalleryContainer>
            </MainSectionRowStyled>

                <MainSectionRowStyled>
                    <p>{description}</p>
                    <h2>Details</h2>
                    {renderGeneralPanel(data)}
                    <Article
                        header="Amenities"
                        content={
                            <>
                            </>
                        }
                    />

                </MainSectionRowStyled>

            </MainSectionStyled>
            {renderSidebar(data, openContactModal)}
        </>
    )
}

export default function PropertyDetail(props) {
    const id = props.match.params.id;
    const [response] = useAsyncFetch(service, { id });
    const [openContactModal, setOpenContactModal] = useState(false);
    console.log(openContactModal);

    const onSubmitContactForm = () => {
        console.log('submit');
        setOpenContactModal(false);
    }
    return (
        <SectionStyled>
            {
                response.isFetching
                    ? 'loading'
                    : response.data && renderDetails(response, () => setOpenContactModal(true))
            }
            {
                openContactModal
                    && <Modal
                            content={<ContactForm onSubmit={onSubmitContactForm}/>}
                            onCloseModal={() => setOpenContactModal(false)}
                        />
            }
        </SectionStyled>
    )
}