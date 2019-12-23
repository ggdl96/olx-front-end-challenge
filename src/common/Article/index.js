import React from 'react';
import styled from 'styled-components';
import { $grayLightColor } from '../../styles/constants'

const ArticleContent = styled.div`
    padding-left: 6px;
`

const ArticleHeader = styled.header`
    border-bottom: 1px ${$grayLightColor} solid;
`
function Article({ header, content }) {
    return (
        <article>
            <ArticleHeader>
                <h3>{header}</h3>
            </ArticleHeader>
            <ArticleContent>{content}</ArticleContent>
        </article>
    )
}

export default Article;
