import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import IconButton from './IconButton';
import SvgIcon from './SvgIcon';
import LinkedIn from '../assets/icons/linkedin.svg';
import Github from '../assets/icons/github.svg';
import { Colors } from '../utils/constants';

const HEADER_CLOSED_HEIGHT = '50';
const HEADER_OPEN_HEIGHT = '300';
const BUTTON_LINKS = [
    {
        icon: LinkedIn,
        url: 'https://www.linkedin.com/in/drew-johnson-859690121/',
        label: 'LinkedIn'
    },
    { icon: Github, url: 'https://github.com/DrewJohnsonGT/', label: 'GitHub' }
];
const LINKS = [
    {
        value: '/',
        label: 'About'
    },
    {
        value: '/projects',
        label: 'Projects'
    },
    {
        value: '/resume',
        label: 'Resume'
    },
    {
        value: '/contact',
        label: 'Contact'
    }
];
const HeaderNavDiv = styled.div`
    display: flex;
    flex-direction: column;
    max-height: ${HEADER_CLOSED_HEIGHT}px;
    transition: max-height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${({ isMenuOpen }) =>
        isMenuOpen &&
        css`
            max-height: ${HEADER_OPEN_HEIGHT}px;
        `}
`;
const Collapse = styled.div`
    overflow: hidden;
`;
const Header = styled.div`
    display: flex;
    min-height: ${HEADER_CLOSED_HEIGHT}px;
    background-color: ${Colors.darkOrange};
`;
const NavButtonsDiv = styled.div`
    display: none;
    @media (min-width: 600px) {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
`;
const MenuDiv = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        flex: 1;
        justify-content: flex-end;
    }
`;
const NavLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    position: relative;
    font-size: 1.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${HEADER_CLOSED_HEIGHT}px;
`;
const MenuIcon = styled(FaBars)`
    color: white;
    font-size: 30px;
`;
const MenuIconButton = styled(IconButton)`
    padding: 2.5px;
    width: 50px;
`;
const LinksIconButton = styled(IconButton)``;
const LinkIcon = styled(SvgIcon)`
    width: 25px;
    height: 25px;
`;
const LinkIconsDiv = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
`;
const Hr = styled.hr`
    position: absolute;
    height: 0.25rem;
    top: ${HEADER_CLOSED_HEIGHT - 10}px;
    margin: 0;
    width: 90px;
    background: white;
    border: none;
    transition: 0.5s ease-in-out;
    pointer-events: none;
    ${({ selected }) => css`
        right: ${(LINKS.length - selected - 1) * 80 +
            (2 * (LINKS.length - selected - 1) + 1) * 5}px;
        width: ${selected !== -1 ? 80 : 0}px;
    `}
`;
const LinkButton = styled.button`
    border-radius: 0;
    padding: 0;
    width: 90px;
    background-color: ${Colors.darkOrange};
    border: none;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    &:hover {
        color: white;
    }
    ${({ selected }) =>
        selected
            ? css`
                  font-weight: 600;
                  color: white;
              `
            : css`
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.5);
              `}
    &:hover ~ hr {
        ${({ index }) =>
            css`
                right: ${(LINKS.length - index - 1) * 80 +
                    (2 * (LINKS.length - index - 1) + 1) * 5}px;
                width: 80px;
            `};
    }
    & > span {
        color: rgba(255, 255, 255, 0.5);
    }
    &:hover > span {
        color: white;
    }
`;
// Expanded menu items
const MenuList = styled.div`
    background-color: ${Colors.darkOrange};
    padding-bottom: 1vh;
    text-align: right;
`;
const MenuCollapse = styled(Collapse)`
    @media (min-width: 600px) {
        display: none;
    }
`;
const MenuListItem = styled.div`
    padding: 1vh 1vw;
`;
const MenuLink = styled(Link)`
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    position: relative;
    font-size: 1.15em;
    margin: 5px;
    ${({ selected }) =>
        selected &&
        css`
            font-weight: bold;
            color: white;
        `}
    &:hover {
        font-weight: bold;
        color: white;
    }
`;
const HeaderNav = ({ location }) => {
    const selected = LINKS.findIndex(
        link => location.pathname.split('/')[1] === link.value.substring(1)
    );
    const [isMenuOpen, menuToggle] = useState(false);
    return (
        <HeaderNavDiv isMenuOpen={isMenuOpen}>
            <Header>
                <LinkIconsDiv>
                    {BUTTON_LINKS.map(({ url, label, icon }) => (
                        <LinksIconButton
                            onClick={() => window.open(url, '_blank')}
                            key={label}
                        >
                            <LinkIcon src={icon} alt={label} color='white' />
                        </LinksIconButton>
                    ))}
                </LinkIconsDiv>
                <NavButtonsDiv>
                    {LINKS.map((link, index) => (
                        <LinkButton
                            key={link.value}
                            index={index}
                            selected={selected === index}
                        >
                            <NavLink to={link.value}>{link.label}</NavLink>
                        </LinkButton>
                    ))}
                    <Hr selected={selected} />
                </NavButtonsDiv>
                <MenuDiv>
                    <MenuIconButton onClick={() => menuToggle(!isMenuOpen)}>
                        <MenuIcon />
                    </MenuIconButton>
                </MenuDiv>
            </Header>
            <MenuCollapse>
                <MenuList isMenuOpen={isMenuOpen}>
                    {LINKS.map((link, index) => (
                        <MenuListItem key={link.value}>
                            <MenuLink
                                to={link.value}
                                selected={selected === index}
                            >
                                {link.label}
                            </MenuLink>
                        </MenuListItem>
                    ))}
                </MenuList>
            </MenuCollapse>
        </HeaderNavDiv>
    );
};

export default HeaderNav;
