import React from 'react';
import styled from 'styled-components';

const Root = styled.a`
    color: ${({ theme }) => theme.colorHighEmphasis};
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`;

const ExternalLink = ({ to, children, ...props }) => (
    <Root href={to} target='_blank' rel='noopener' {...props}>
        {children}
    </Root>
);

export default ExternalLink;
