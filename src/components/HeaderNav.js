import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { globalHistory } from '@reach/router';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { COLORS } from 'utils/constants';
import IconButton from './IconButton';

const HEADER_CLOSED_HEIGHT = 50;
const HEADER_OPEN_HEIGHT = 300;
const NAV_ITEM_WIDTH = 130;
const HR_WIDTH_PER_CHAR = 13.5;

const LINKS = [
    {
        value: '/latest',
        label: 'Latest',
    },
    {
        value: '/posts',
        label: 'Posts',
    },
    {
        value: '/projects',
        label: 'Projects',
    },
    {
        value: '/resume',
        label: 'Resume',
    },
    {
        value: '/contact',
        label: 'Contact',
    },
];

const Root = styled.div`
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
    background-color: ${COLORS.DARK_ORANGE};
`;
const NavButtonsDiv = styled.div`
    display: none;
    @media (min-width: 600px) {
        display: flex;
        flex: 1;
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
    font-family: 'Qube1', 'Qube2';
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

const Hr = styled.hr`
    position: absolute;
    height: 0.25rem;
    top: ${HEADER_CLOSED_HEIGHT - 10}px;
    margin: 0;
    width: ${NAV_ITEM_WIDTH}px;
    background: white;
    border: none;
    transition: 0.5s ease-in-out;
    pointer-events: none;
    ${({ selected }) => {
        const linkHrWidth =
            selected !== -1
                ? LINKS[selected].value.length * HR_WIDTH_PER_CHAR
                : 0;
        return css`
            left: ${selected * NAV_ITEM_WIDTH +
                (NAV_ITEM_WIDTH - linkHrWidth) / 2}px;
            width: ${linkHrWidth}px;
        `;
    }}
`;
const LinkButton = styled.button`
    border-radius: 0;
    padding: 0;
    width: ${NAV_ITEM_WIDTH}px;
    background-color: ${COLORS.DARK_ORANGE};
    border: none;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    &:hover {
        color: ${({ theme }) => theme.textHover};
    }
    ${({ selected }) =>
        selected
            ? css`
                  font-weight: 600;
                  color: ${({ theme }) => theme.text};
              `
            : css`
                  font-weight: 400;
                  color: rgba(255, 255, 255, 0.5);
              `}
    &:hover ~ hr {
        ${({ index }) => {
            const linkHrWidth =
                index !== -1
                    ? LINKS[index].value.length * HR_WIDTH_PER_CHAR
                    : 0;
            return css`
                left: ${index * NAV_ITEM_WIDTH +
                    (NAV_ITEM_WIDTH - linkHrWidth) / 2}px;
                width: ${linkHrWidth}px;
            `;
        }};
    }
    & > span {
        color: rgba(255, 255, 255, 0.5);
    }
    &:hover > span {
        color: ${({ theme }) => theme.textHover};
    }
`;
// Expanded menu items
const MenuList = styled.div`
    background-color: ${({ theme }) => theme.background};
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
    font-family: 'Qube1', 'Qube2';
    color: ${({ theme }) => theme.text}99;
    text-decoration: none;
    position: relative;
    font-size: 1.15em;
    margin: 5px;
    ${({ selected }) =>
        selected &&
        css`
            font-weight: bold;
            color: ${({ theme }) => theme.text};
        `}
    &:hover {
        font-weight: bold;
        color: ${({ theme }) => theme.textHover};
    }
`;

const HeaderNav = ({ themeToggler }) => {
    const location = globalHistory.location;
    const selected = LINKS.findIndex(
        (link) => location.pathname.split('/')[1] === link.value.substring(1)
    );
    const [isMenuOpen, menuToggle] = useState(false);
    return (
        <Root isMenuOpen={isMenuOpen} onClick={() => themeToggler()}>
            <Header>
                <NavButtonsDiv>
                    {LINKS.map((link, index) => (
                        <LinkButton
                            key={link.value}
                            index={index}
                            selected={selected === index}>
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
                                selected={selected === index}>
                                {link.label}
                            </MenuLink>
                        </MenuListItem>
                    ))}
                </MenuList>
            </MenuCollapse>
        </Root>
    );
};

export default HeaderNav;
