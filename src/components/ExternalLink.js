import React from 'react';
import styled from 'styled-components';

const Root = styled.a`
    color: ${({ theme }) => theme.colorHighEmphasis};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ExternalLink = ({ to, children }) => (
    <Root href={to} target='_blank' rel='noopener'>
        {children}
    </Root>
);

export default ExternalLink;
