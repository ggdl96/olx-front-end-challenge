import React, { useState } from 'react';
import ImageZoom from 'react-medium-image-zoom';
import styled from 'styled-components';

const buttonsHeight = '20px';

const ImageButton = styled.button`
    height: ${buttonsHeight};
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
                        height: !isImageZoomed ? `calc(${imageStyle.height} - ${buttonsHeight})` : 'unset',
                        'objectFit': 'cover',
                    },
                }}
                isZoomed={isImageZoomed}
                onZoom={() => setIsImageZoomed(true)}
                onUnzoom={() => setIsImageZoomed(false)}
            />
            <div>
                {
                    values.images.map((image, index) =>
                        <ImageButton onClick={() => setImageIndex(index)}>.</ImageButton>
                    )
                }
            </div>
        </>
    );
}
