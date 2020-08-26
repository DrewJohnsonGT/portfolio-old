import React from 'react';
import styled from 'styled-components';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import {
    FOOTER_HEIGHT,
    COLORS,
    LINKED_IN_URL,
    GITHUB_URL,
} from 'utils/constants';
import Text from './Text';
import TextLink from './TextLink';
import IconButton from './IconButton';

const ICON_SIZE = FOOTER_HEIGHT * 0.75;

const Root = styled.footer`
    z-index: 2;
    text-align: center;
    color: ${({ theme }) => theme.colorMidEmphasis};
    background-color: ${({ theme }) => theme.accentBackground};
    height: ${FOOTER_HEIGHT}px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BuiltBy = styled(Text)`
    margin-right: 0.35rem;
    @media (max-width: 450px) {
        display: none;
    }
`;
const Copyright = styled(Text)``;

const LinkButton = styled(IconButton)``;

const LINKS = [
    {
        icon: AiOutlineLinkedin,
        color: COLORS.LINKED_IN_BLUE,
        hoverColor: COLORS.LINKED_IN_LIGHT_BLUE,
        url: LINKED_IN_URL,
        label: 'LinkedIn',
    },
    {
        icon: AiFillGithub,
        color: COLORS.GITHUB_PURPLE,
        hoverColor: COLORS.GITHUB_LIGHT_PURPLE,
        url: GITHUB_URL,
        label: 'GitHub',
    },
].map(({ icon, label, url, color, hoverColor }) => {
    const Icon = styled(icon)`
        height: ${ICON_SIZE}px;
        width: ${ICON_SIZE}px;
        color: ${color};
        &:hover {
            color: ${hoverColor};
        }
    `;
    return (
        <LinkButton onClick={() => window.open(url)}>
            <Icon alt={label} />
        </LinkButton>
    );
});

const Footer = () => (
    <Root>
        {LINKS[0]}
        <BuiltBy type='primary'>
            Built By <TextLink to='/'>Drew Johnson</TextLink>
        </BuiltBy>
        <Copyright type='primary'>
            {' '}
            © {new Date().getFullYear()} (WIP)
        </Copyright>
        {LINKS[1]}
    </Root>
);

export default Footer;
