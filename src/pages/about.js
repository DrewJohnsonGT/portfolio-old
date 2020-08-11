import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/index';

const PageTitle = styled(Text)``;
const Intro = styled(Text)``;
const SiteDescription = styled(Text)``;

const AboutPage = () => (
    <>
        <PageTitle type='pageTitle'>About</PageTitle>
        <Intro type='subheader2'>
            I'm Drew, a software engineer and I'm always building something
        </Intro>
        <SiteDescription type='subheader2'>
            This is my personal portfolio, blog, and playground
        </SiteDescription>
    </>
);

export default AboutPage;
