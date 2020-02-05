import React from 'react'
import { Link } from 'gatsby'
import ActionButton from './ActionButton'
import styled from 'styled-components'

const StyledButton = styled(ActionButton)`
    height: 45px;
    margin: 1vw 1vh;
`
const ButtonLink = styled(Link)`
    text-decoration: none;
    font-size: 1.15em;
    color: white;
`
const LinkButton = ({ to, children, linkprops, ...props }) => (
    <StyledButton {...props}>
        <ButtonLink to={to} {...linkprops}>
            {children}
        </ButtonLink>
    </StyledButton>
)

export default LinkButton
