import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
    color: ${({ theme }) => theme.colorHighEmphasis};
    cursor: pointer;
    text-align: center;
    &:hover {
        text-decoration: underline;
    }
`;

const TLDRLink = () => (
    <Root onClick={() => window.scrollTo(0, document.body.scrollHeight)}>
        TLDR
    </Root>
);

export default TLDRLink;
