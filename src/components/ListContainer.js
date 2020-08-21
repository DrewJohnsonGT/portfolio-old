import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Root = styled(Link)`
    margin: 0.5rem;
    padding: 1rem;
    color: inherit;
    text-decoration: none;
    border-radius: 2px;
    border: 0px solid transparent;
    background-color: ${({ theme }) => theme.offBackground};
    transition: all 0.15s ease-in-out;
    backface-visibility: hidden;
    &:hover {
        transform: scale(1.025);
        border: 4px solid ${({ theme }) => theme.colorMidEmphasis};
    }
`;

const ListContainer = ({ children, to, ...props }) => (
    <Root to={to} {...props}>
        {children}
    </Root>
);

export default ListContainer;
