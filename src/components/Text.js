import React from 'react';
import styled from 'styled-components';
import { MOBILE_SCREEN_WIDTH } from 'utils/constants';

const Header = styled.h1`
    font-family: 'Qube1', 'Qube2';
`;
const SubHeader1 = styled.h2`
    text-align: center;
`;
const SubHeader2 = styled.h4`
    margin: 0;
    font-weight: 100;
    color: ${({ theme }) => theme.colorLowEmphasis};
`;
const PageTitle = styled.h1`
    display: none;
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        display: flex;
    }
`;
const Body = styled.p``;

const TEXT_TYPES = {
    header: Header,
    subheader1: SubHeader1,
    subheader2: SubHeader2,
    body: Body,
    pageTitle: PageTitle,
};
const Text = ({ type, children }) => {
    const TextComponent = TEXT_TYPES[type] || React.Fragment;
    return <TextComponent>{children}</TextComponent>;
};

export default Text;
