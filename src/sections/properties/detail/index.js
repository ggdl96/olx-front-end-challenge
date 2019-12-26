import React, { useState } from 'react'
import styled from 'styled-components'

import { useAsyncFetch } from '../../../utils/axios';
import { service } from '../../../entities/Property';
import Article from '../../../common/Article';
import Modal from '../../../common/Modal';
import ContactForm from './forms/contact';
import { getStatus } from '../../../foundations/properties';
import Gallery from './components/Gallery';

import { $grayLightColor } from '../../../styles/constants';

const mainSectionWidth = '80%';
const galleryContainerHeight = '280px';

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
    height: ${galleryContainerHeight};
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
                <SpanItemStyled>Tipos de pago: {payment && payment.join(', ')}</SpanItemStyled>
            </MainSectionRowStyled>
            <MainSectionRowStyled>
                <SpanItemStyled>Etiquetas: {tags && tags.join(', ')}</SpanItemStyled>
                {disposition && <SpanItemStyled>disposición: {disposition.join(', ')}</SpanItemStyled>}
            </MainSectionRowStyled>

            <MainSectionRowStyled darker>
                <button onClick={handleOnClickContact}>Contactar</button>
            </MainSectionRowStyled>
        </SideBarDetailStyled>
    )
}


function Details({ data, openContactModal }) {
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
                            <Gallery
                                values={values}
                                imageStyle={{ height: galleryContainerHeight }}
                            />
                        }
                    </GalleryContainer>
            </MainSectionRowStyled>

                <MainSectionRowStyled>
                    <p>{description}</p>
                    <h2>Details</h2>
                    {renderGeneralPanel(values)}
                    <Article
                        header="Amenities"
                        content={
                            <>
                            </>
                        }
                    />

                </MainSectionRowStyled>

            </MainSectionStyled>
            {renderSidebar(values, openContactModal)}
        </>
    )
}

export default function PropertyDetail(props) {
    const id = props.match.params.id;
    const [response] = useAsyncFetch(service, { id });
    const [openContactModal, setOpenContactModal] = useState(false);
    const [formValues, setFormValues] = useState({});
    const [formValidValues, setFormValidValues] = useState({ name: true, email: true, message: true });

    const onSubmitContactForm = (values) => {
        const nameValidations = name => name && name.length && name.length < 150
            ? /([a-zA-ZäÄëËöÖÜüáéíóú])/g.test(name)
            : false;

        const emailValidations = email => email && email.length >= 3;

        const messageValidations = message => message && message.length && message.length <= 500;

        let invalidFields = {};

        if (!nameValidations(values.name)) {
            invalidFields = {...invalidFields, name: false };
        } 
        
        if (!emailValidations(values.email)) {
            invalidFields = { ...invalidFields, email: false };
        }

        if (!messageValidations(values.message)) {
            invalidFields = { ...invalidFields, message: false };
        }

        if (Object.keys(invalidFields).length === 0) {
            setOpenContactModal(false);
        } else {
            setFormValidValues({...setFormValidValues});
        }
    }
    return (
        <SectionStyled>
            {
                response.isFetching
                    ? 'loading'
                    : response.data &&
                    <Details data={response} openContactModal={() => setOpenContactModal(true)} />
            }
            {
                openContactModal
                    && (<Modal
                            content={
                            <ContactForm
                                onSubmit={() => onSubmitContactForm(formValues)}
                                values={formValues}
                                onChange={(props) => {
                                    setFormValues({ ...formValues, ...props })
                                }}
                                validFields={formValidValues}
                            />
                        }
                            onCloseModal={() => setOpenContactModal(false)}
                        />)
            }
        </SectionStyled>
    )
}