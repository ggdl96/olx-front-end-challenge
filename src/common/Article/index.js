import React from 'react';
import styled from 'styled-components';

const ArticleContent = styled.div`
    padding-left: 6px;
`
function Article({ header, content }) {
    return (
        <article>
            <header>
                <h3>{header}</h3>
                <ArticleContent>{content}</ArticleContent>
            </header>
        </article>
    )
}

export default Article;
