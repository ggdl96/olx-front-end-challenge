import React, { useState } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import styled from 'styled-components';

import ImageContained from '../../../../../common/ImageContained';

import { $secondaryColor } from '../../../../../styles/constants';

const buttonContainerHeight = '50px';
const buttonDimension = '40px';

const ImageButton = styled.button`
    height: ${buttonDimension};
    padding: 0px;
    text-align: center;
    line-height: 1px;
    vertical-align: middle;

    :active {
        border: 1px ${$secondaryColor} solid;
    }
`;

const NavGalleryContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
`;

export default function({ values, imageStyle }) {
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);


    return (
        <>
            <ImageZoom
                image={{
                    src: values.images[imageIndex] && values.images[imageIndex].big,
                    alt: 'image',
                }}
                zoomImage={{
                    src: values.images[imageIndex] && values.images[imageIndex].big,
                    alt: 'image zoomed',
                }}
                defaultStyles={{
                    image: {
                        width: !isImageZoomed ? '100%' : 'unset',
                        height: !isImageZoomed
                            ? `calc(${imageStyle.height} - ${buttonContainerHeight})`
                            : 'unset',
                        'objectFit': 'cover',
                    },
                }}
                isZoomed={isImageZoomed}
                onZoom={() => setIsImageZoomed(true)}
                onUnzoom={() => setIsImageZoomed(false)}
            />
            <NavGalleryContainer>
                {
                    values.images.map((image, index) =>
                        <ImageButton key={index} onClick={() => setImageIndex(index)}>
                            <ImageContained
                                src={values.images[index].small}
                                alt="thumbnail"
                                height={buttonDimension}
                                width={buttonDimension}
                            />
                        </ImageButton>
                    )
                }
            </NavGalleryContainer>
        </>
    );
}
