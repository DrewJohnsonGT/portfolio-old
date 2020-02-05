import React from 'react'
import styled from 'styled-components'

const SvgIcon = styled.img`
    max-width: 100%;
`
const Svg = ({ ...props }) => <SvgIcon {...props}></SvgIcon>

export default Svg
