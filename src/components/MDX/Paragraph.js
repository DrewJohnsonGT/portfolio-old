import React from 'react';
import styled from 'styled-components';

const Root = styled.p`
    color: ${({ theme }) => theme.colorMidEmphasis};
    margin-bottom: 2rem;
`;

const Paragraph = ({ children, ...props }) => (
    <Root {...props}>{children}</Root>
);

export default Paragraph;
