import React from 'react'
import styled from 'styled-components'

const Icon = styled.button`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    outline: none;
    &:hover {
        background-color: rgba(0, 0, 0, 0.15);
    }
`

const IconButton = ({ children, ...props }) => (
    <Icon {...props}>{children}</Icon>
)

export default IconButton
