import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Root = styled(Link)`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
        text-decoration: underline;
    }
`;

const TextLink = ({ children, ...props }) => <Root {...props}>{children}</Root>;

export default TextLink;
