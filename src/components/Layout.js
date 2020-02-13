import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Location } from '@reach/router';
import HeaderNav from './HeaderNav';
import TextLink from './TextLink';
import styled from 'styled-components';
import { COLORS } from '../utils/constants';
import './Layout.css';

const LayoutRoot = styled.div`
    height: 100%;
    background-color: ${COLORS.offWhite};
    position: relative;
`;
const Main = styled.main``;
const Footer = styled.footer`
    text-align: center;
    background-color: ${COLORS.darkOrangeText};
    height: 40px;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: pre-wrap;
`;

const EmailLink = styled.a`
    text-decoration: none;
    color: rgba(0, 0, 0, 0.5);
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
`;
const InterestedDiv = styled.div`
    padding: 3rem 0;
    background-color: ${COLORS.lightOrange};
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const InterestedTitle = styled.div`
    font-weight: bold;
    font-size: 1.85rem;
    margin-bottom: 10px;
`;
const InterestedText = styled.div`
    font-weight: 300;
    font-size: 1.5rem;
    max-width: 800px;
    text-align: center;
`;
const MyAvatar = styled(Img)`
    margin: 10px;
    width: 175px;
    height: 175px;
    border: 3px solid ${COLORS.darkOrange};
    border-radius: 50%;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
const mailString = `mailto:drewjohnsongt@gmail.com`;

const bottomBarPages = ['', 'resume', '404'];

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query {
            profile: file(relativePath: { eq: "images/profile.jpg" }) {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <Location>
            {({ location }) => {
                const currentPage = location.pathname.split('/')[1];
                return (
                    <LayoutRoot location={location}>
                        <HeaderNav location={location} />
                        <Main>{children}</Main>
                        {bottomBarPages.includes(currentPage) && (
                            <InterestedDiv>
                                <MyAvatar
                                    alt="Drew Johnson"
                                    fluid={
                                        data &&
                                        data.profile.childImageSharp.fluid
                                    }
                                />
                                <InterestedTitle>
                                    Want to work together?
                                </InterestedTitle>
                                <InterestedText>
                                    Have a challenge you want me to tackle? Drop
                                    me an email at{' '}
                                    <EmailLink
                                        onClick={() =>
                                            (location.href = mailString)
                                        }
                                    >
                                        DrewJohnsonGT@gmail.com
                                    </EmailLink>{' '}
                                    or use the form on the{' '}
                                    <TextLink to="/contact">
                                        Contact Page
                                    </TextLink>
                                </InterestedText>
                            </InterestedDiv>
                        )}
                        <Footer>
                            (Work in Progress) © {new Date().getFullYear()},
                            Built By{' '}
                            <TextLink
                                to="/"
                                style={{
                                    color: 'white',
                                    textDecoration: 'underline'
                                }}
                            >
                                Drew Johnson
                            </TextLink>
                        </Footer>
                    </LayoutRoot>
                );
            }}
        </Location>
    );
};

export default Layout;
