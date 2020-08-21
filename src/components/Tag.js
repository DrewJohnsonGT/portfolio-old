import React from 'react';
import styled from 'styled-components';

const Root = styled.span`
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colorLowEmphasis};
    color: white;
`;

const Tag = ({ children }) => <Root>{children}</Root>;

export default Tag;
