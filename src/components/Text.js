import React from 'react';
import styled from 'styled-components';

const Header = styled.h1``;
const SubHeader = styled.h3`
    color: ${({ theme }) => theme.colorLowEmphasis};
`;
const Body = styled.body``;

const TEXT_TYPES = {
    header: Header,
    subheader: SubHeader,
    Body: Body,
};
const Text = ({ type, children }) => {
    const TextComponent = TEXT_TYPES[type];
    return <TextComponent>{children}</TextComponent>;
};

export default Text;
