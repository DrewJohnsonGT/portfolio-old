import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import HeaderNav from './HeaderNav';
import TextLink from './TextLink';
import {
    COLORS,
    HEADER_HEIGHT,
    LIGHT_THEME,
    DARK_THEME,
} from 'utils/constants';
import { useDarkMode } from 'utils/hooks';

const Root = styled.div`
    height: 100%;
    background-color: ${COLORS.OFF_WHITE};
    position: relative;
`;
const Main = styled.main`
    height: calc(100vh - ${HEADER_HEIGHT}px);
    margin: 0;
    background-color: ${({ theme }) => theme.background};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Footer = styled.footer`
    text-align: center;
    background-color: ${COLORS.DARK_ORANGE_TEXT};
    height: 40px;
    color: white;
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
                <HeaderNav themeToggler={themeToggler} />
                <Main>{children}</Main>
                <Footer>
                    Built By{' '}
                    <TextLink
                        to='/'
                        style={{
                            color: 'white',
                            textDecoration: 'underline',
                        }}>
                        Drew Johnson
                    </TextLink>{' '}
                    © {new Date().getFullYear()}
                </Footer>
            </Root>
        </ThemeProvider>
    );
};

export default Layout;
