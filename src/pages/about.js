import React from 'react';
import styled, { css } from 'styled-components';
import { Text, TextLink } from 'components/index';
import { MIN_SCREEN_WIDTH } from 'utils/constants';
import Profile from 'assets/images/profile2.jpg';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
    flex-direction: column;
`;
const PageTitle = styled(Text)``;
const TextStyles = css`
    text-align: center;
`;
const Intro = styled(Text)`
    ${TextStyles};
`;
const SiteDescription = styled(Text)`
    ${TextStyles};
`;
const ProfileImage = styled.img`
    margin: 0.5rem;
    max-width: ${MIN_SCREEN_WIDTH}px;
    width: auto;
    height: auto;
    border-radius: 50%;
    transition: border-color 0.15s ease-in-ease-in-out;
    border: 8px solid ${({ theme }) => theme.colorHighEmphasis};
`;

const AboutPage = () => (
    <Wrapper>
        <PageTitle type='pageTitle'>About</PageTitle>
        <Intro type='subheader1' emphasis='LOW'>
            I'm Drew, a{' '}
            <b>
                <TextLink to='/resume'>Software Engineer</TextLink>
            </b>{' '}
            and <br />
            I'm always{' '}
            <b>
                <TextLink to='/projects'>Building Something</TextLink>
            </b>
        </Intro>
        <ProfileImage src={Profile} alt='Drew Johnson' />
        <SiteDescription type='subheader1' emphasis='LOW'>
            This is my personal <TextLink to='/projects'>portfolio</TextLink>,{' '}
            <TextLink to='/posts'>blog</TextLink>, and{' '}
            <TextLink to='/games'>playground</TextLink>
        </SiteDescription>
    </Wrapper>
);

export default AboutPage;
