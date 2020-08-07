import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Root = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colorMidEmphasis};
    &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colorHighEmphasis};
    }
`;

const TextLink = ({ children, ...props }) => <Root {...props}>{children}</Root>;

export default TextLink;
