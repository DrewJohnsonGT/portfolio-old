import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { FaBars } from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';
import { ROUTES, MOBILE_SCREEN_WIDTH, HEADER_HEIGHT } from 'utils/constants';
import { useClickAway } from 'utils/hooks';
import IconButton from './IconButton';
import DarkModeToggle from './DarkModeToggle';
import Cube from './HeaderCube';

const HEADER_OPEN_HEIGHT = ROUTES.length * 50;
const NAV_ITEM_WIDTH = 130;
const HR_WIDTH_PER_CHAR = 15;

const Root = styled.header`
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.accentBackground};
    height: ${HEADER_HEIGHT}px;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    ${({ isMenuOpen }) =>
        isMenuOpen &&
        css`
            height: ${HEADER_OPEN_HEIGHT}px;
        `}
`;
const Collapse = styled.div`
    overflow: hidden;
`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${HEADER_HEIGHT}px;
    background-color: ${({ theme }) => theme.accentBackground};
`;
const NavButtonsDiv = styled.div`
    display: none;
    @media (min-width: ${MOBILE_SCREEN_WIDTH}px) {
        display: flex;
        flex: 1;
    }
`;
const MenuDiv = styled.div`
    display: none;
    @media (max-width: ${MOBILE_SCREEN_WIDTH}px) {
        flex: 1;
        display: flex;
        height: ${HEADER_HEIGHT}px;
        justify-content: flex-end;
    }
`;
const NavLink = styled(Link)`
    color: inherit;
    background-color: transparent;
    font-family: 'Qube1', 'Qube2';
    text-decoration: none;
    position: relative;
    font-size: 1.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${HEADER_HEIGHT}px;
`;
const IconStyles = css`
    font-size: 30px;
    color: ${({ theme }) => theme.colorMidEmphasis};
    &:hover {
        color: ${({ theme }) => theme.colorHighEmphasis};
    }
`;
const MenuIcon = styled(FaBars)`
    ${IconStyles};
`;
const CloseIcon = styled(FiChevronDown)`
    ${IconStyles};
`;
const IconButtonStyles = css`
    padding: 2.5px;
    width: 50px;
`;
const MenuButton = styled(IconButton)`
    ${IconButtonStyles};
`;
const CloseButton = styled(IconButton)`
    ${IconButtonStyles};
`;

const Hr = styled.hr`
    position: absolute;
    height: 0.3rem;
    top: ${HEADER_HEIGHT - 15}px;
    margin: 0;
    margin-left: ${HEADER_HEIGHT}px;
    width: ${NAV_ITEM_WIDTH}px;
    background: ${({ theme }) => theme.colorHighEmphasis};
    border: none;
    transition: 0.5s ease-in-out;
    pointer-events: none;
    ${({ selected }) => {
        const linkHrWidth =
            selected !== -1
                ? ROUTES[selected].value.length * HR_WIDTH_PER_CHAR
                : 0;
        return css`
            left: ${selected * NAV_ITEM_WIDTH +
                (NAV_ITEM_WIDTH - linkHrWidth) / 2}px;
            width: ${linkHrWidth}px;
        `;
    }}
`;
const LinkButton = styled.button`
    background-color: transparent;
    border-radius: 0;
    padding: 0;
    width: ${NAV_ITEM_WIDTH}px;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    outline: none;
    &:hover {
        font-weight: bold;
        color: ${({ theme }) => theme.colorMidEmphasis};
    }
    ${({ selected }) =>
        selected
            ? css`
                  font-weight: bold;
                  color: ${({ theme }) => theme.colorMidEmphasis};
              `
            : css`
                  font-weight: normal;
                  color: ${({ theme }) => theme.colorMidEmphasis}BB;
              `}
    &:hover ~ hr {
        ${({ index }) => {
            const linkHrWidth =
                index !== -1
                    ? ROUTES[index].value.length * HR_WIDTH_PER_CHAR
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
        color: ${({ theme }) => theme.colorMidEmphasis};
    }
`;
// Expanded menu items
const MenuList = styled.div`
    padding-bottom: 1vh;
    text-align: right;
`;
const MenuCollapse = styled(Collapse)`
    @media (min-width: ${MOBILE_SCREEN_WIDTH}px) {
        display: none;
    }
`;
const MenuListItem = styled.div`
    padding: 1vh 1vw;
`;
const MenuLink = styled(Link)`
    font-family: 'Qube1', 'Qube2';
    color: ${({ theme }) => theme.colorMidEmphasis}99;
    text-decoration: none;
    position: relative;
    font-size: 1.15em;
    margin: 5px;
    ${({ selected }) =>
        selected &&
        css`
            font-weight: bold;
            color: ${({ theme }) => theme.colorMidEmphasis};
        `}
    &:hover {
        font-weight: bold;
        color: ${({ theme }) => theme.colorMidEmphasis};
    }
`;

const HeaderNav = ({ themeToggler, theme, currentPathname }) => {
    const selected = ROUTES.findIndex((link) => currentPathname === link.value);
    const [isMenuOpen, menuToggle] = useState(false);
    const clickAwayRef = useClickAway(() => menuToggle(false));
    return (
        <Root isMenuOpen={isMenuOpen}>
            <Header>
                <Link to='/'>
                    <Cube selectedPath={currentPathname} />
                </Link>
                <NavButtonsDiv>
                    {ROUTES.map((link, index) => (
                        <LinkButton
                            key={link.value}
                            index={index}
                            selected={selected === index}>
                            <NavLink to={`/${link.value}`}>
                                {link.label}
                            </NavLink>
                        </LinkButton>
                    ))}
                    <Hr selected={selected} />
                </NavButtonsDiv>
                <DarkModeToggle theme={theme} onClick={() => themeToggler()} />
                <MenuDiv>
                    {isMenuOpen ? (
                        <CloseButton onClick={() => menuToggle(false)}>
                            <CloseIcon />
                        </CloseButton>
                    ) : (
                        <MenuButton onClick={() => menuToggle(true)}>
                            <MenuIcon />
                        </MenuButton>
                    )}
                </MenuDiv>
            </Header>
            <MenuCollapse ref={clickAwayRef}>
                <MenuList>
                    {ROUTES.map((link, index) => (
                        <MenuListItem key={link.value}>
                            <MenuLink
                                to={`/${link.value}`}
                                selected={selected === index}
                                onClick={() => menuToggle(false)}>
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
