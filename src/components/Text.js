import React from 'react';
import styled, { css } from 'styled-components';
import { MOBILE_SCREEN_WIDTH } from 'utils/constants';

const TextStyles = css`
    color: ${({ theme, emphasis }) =>
        emphasis
            ? emphasis === 'LOW'
                ? theme.colorLowEmphasis
                : theme.colorHighEmphasis
            : theme.colorMidEmphasis};
    font-weight: ${({ emphasis }) =>
        emphasis ? (emphasis === 'LOW' ? 'lighter' : 'bold') : 'revert'};
`;
const Header = styled.h1`
    ${TextStyles};
`;
const SubHeader1 = styled.h2`
    text-align: center;
    ${TextStyles};
`;
const SubHeader2 = styled.h3`
    ${TextStyles};
`;
const PageTitle = styled.h1`
    ${TextStyles};
    text-align: center;
    font-family: 'Qube1', 'Qube2';
    margin-top: 0;
    display: ${({ showDesktop }) => (showDesktop ? 'flex' : 'none')};
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        display: flex;
    }
`;
const Primary = styled.span`
    ${TextStyles};
`;

const TEXT_TYPES = {
    header: Header,
    subheader1: SubHeader1,
    subheader2: SubHeader2,
    primary: Primary,
    pageTitle: PageTitle,
};
const Text = ({ type, emphasis, children, ...props }) => {
    const TextComponent = TEXT_TYPES[type] || React.Fragment;
    return (
        <TextComponent emphasis={emphasis} {...props}>
            {children}
        </TextComponent>
    );
};

export default Text;
