import React from 'react';
import styled from 'styled-components';
import { AiOutlineLinkedin, AiFillGithub } from 'react-icons/ai';
import {
    FOOTER_HEIGHT,
    COLORS,
    LINKED_IN_URL,
    GITHUB_URL,
} from 'utils/constants';
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

const Text = styled.div`
    margin: 0 1rem;
`;

const LinkButton = styled(IconButton)``;

const LINKS = [
    {
        icon: AiOutlineLinkedin,
        color: COLORS.LINKED_IN_BLUE,
        url: LINKED_IN_URL,
        label: 'LinkedIn',
    },
    {
        icon: AiFillGithub,
        color: COLORS.GITHUB_PURPLE,
        url: GITHUB_URL,
        label: 'GitHub',
    },
].map(({ icon, label, url, color }) => {
    const Icon = styled(icon)`
        height: ${ICON_SIZE}px;
        width: ${ICON_SIZE}px;
        color: ${({ theme }) => theme.colorMidEmphasis};
        &:hover {
            color: ${({ theme }) => theme.colorHighEmphasis};
        }
    `;

    return (
        <LinkButton onClick={() => window.open(url)}>
            <Icon alt={label} color={color} />
        </LinkButton>
    );
});

const Footer = () => (
    <Root>
        {LINKS[0]}
        <Text>
            Built By <TextLink to='/'>Drew Johnson</TextLink> ©{' '}
            {new Date().getFullYear()}
        </Text>
        {LINKS[1]}
    </Root>
);

export default Footer;
