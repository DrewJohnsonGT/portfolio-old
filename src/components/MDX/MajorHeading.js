import React from 'react';
import styled from 'styled-components';

const Root = styled.h2`
    color: ${({ theme }) => theme.colorHighEmphasis};
    margin-bottom: 1rem;
    margin-top: 3rem;
    text-transform: capitalize;
`;

const MajorHeading = ({ children, ...props }) => (
    <Root {...props}>{children}</Root>
);

export default MajorHeading;
