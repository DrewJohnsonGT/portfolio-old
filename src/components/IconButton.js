import React from 'react';
import styled from 'styled-components';

const Root = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IconButton = ({ children, ...props }) => (
    <Root {...props}>{children}</Root>
);

export default IconButton;
