import React from 'react';
import styled, { css } from 'styled-components';

const Root = styled.h3`
    color: ${({ theme }) => theme.colorMidEmphasis};
    margin-bottom: 1rem;
    text-transform: capitalize;
    ${({ center }) => css`
        text-align: center;
    `}
`;

const NormalHeading = ({ children, ...props }) => (
    <Root {...props}>{children}</Root>
);

export default NormalHeading;
