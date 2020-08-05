import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HeaderNav from './HeaderNav';
import TextLink from './TextLink';
import {
    HEADER_HEIGHT,
    FOOTER_HEIGHT,
    LIGHT_THEME,
    DARK_THEME,
} from 'utils/constants';
import { useDarkMode } from 'utils/hooks';

const Root = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.background};
    position: relative;
`;
const Main = styled.main`
    min-height: calc(100vh - ${HEADER_HEIGHT}px);
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colorMidEmphasis};
`;
const Footer = styled.footer`
    text-align: center;
    color: ${({ theme }) => theme.colorMidEmphasis};
    background-color: ${({ theme }) => theme.accentBackground};
    height: ${FOOTER_HEIGHT}px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: pre-wrap;
`;

const Layout = ({ children }) => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? LIGHT_THEME : DARK_THEME;
    return (
        <ThemeProvider theme={themeMode}>
            <Root>
                <HeaderNav themeToggler={themeToggler} theme={theme} />
                <Main>{children}</Main>
                <Footer>
                    Built By <TextLink to='/'>Drew Johnson</TextLink> ©{' '}
                    {new Date().getFullYear()}
                </Footer>
            </Root>
        </ThemeProvider>
    );
};

export default Layout;
