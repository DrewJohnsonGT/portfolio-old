import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    height: 45px;
    margin: 1vw 1vh;
    background-color: #db570088;
    color: white;
    border: none;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.3s;
    border-radius: 4px;
    font-size: 0.875rem;
    font-weight: 500;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    &:hover {
        background-color: #db5700;
        box-shadow: 0px 15px 25px -5px rgba(0, 0, 0, 0.2);
        transform: scale(1.03);
    }
    &:active {
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        transform: scale(0.98);
    }
`
const ActionButton = ({ children, ...props }) => (
    <StyledButton {...props}>{children}</StyledButton>
)

export default ActionButton
