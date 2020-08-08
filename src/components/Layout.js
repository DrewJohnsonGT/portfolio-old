import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import {
    HEADER_HEIGHT,
    FOOTER_HEIGHT,
    LIGHT_THEME,
    DARK_THEME,
} from 'utils/constants';
import { useDarkMode } from 'utils/hooks';
import HeaderNav from './HeaderNav';
import Footer from './Footer';

const Root = styled.div`
    height: 100%;
    background-color: ${({ theme }) => theme.background};
`;
const Main = styled.main`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
    overflow-x: hidden;
    overflow-y: auto;
    height: auto;
    min-height: calc(100% - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.colorMidEmphasis};
`;

const Layout = ({ children }) => {
    const [theme, themeToggler] = useDarkMode();
    const themeMode = theme === 'light' ? LIGHT_THEME : DARK_THEME;
    return (
        <ThemeProvider theme={themeMode}>
            <Root>
                <HeaderNav themeToggler={themeToggler} theme={theme} />
                <Main>{children}</Main>
                <Footer />
            </Root>
        </ThemeProvider>
    );
};

export default Layout;
