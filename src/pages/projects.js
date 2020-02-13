import React from 'react';
import { Layout, SEO } from 'components/index';
import styled from 'styled-components';
import { COLORS } from '../utils/constants';
import Pug from '../assets/images/pug.png';

const PUG_SEARCH =
    'https://www.google.com/search?biw=1618&bih=916&tbm=isch&sa=1&ei=IgAyXc7oI5HbtAaFpoaoDQ&q=cute+pugs&oq=cute+pugs&gs_l=img.12..0l10.3742.4211..6198...0.0..0.98.467.5......0....1..gws-wiz-img.......0i7i30.RXCuQBPhb7U&ved=0ahUKEwjOgb-Uw8HjAhWRLc0KHQWTAdUQ4dUDCAY';

const Root = styled.div`
    min-height: calc(100vh - 391px - 6rem);
    margin: 0;
    background-color: ${COLORS.offWhite};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const Text = styled.h1`
    font-size: 1.75em;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    color: ${COLORS.darkOrangeText};
`;
const PugImage = styled.img`
    width: 250px;
    height: 250px;
    animation: wiggle 1s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    animation-iteration-count: infinite;
    animation-direction: alternate-reverse;
    cursor: pointer;
    @keyframes wiggle {
        from {
            transform: rotate(20deg);
        }
        to {
            transform: rotate(-20deg);
        }
    }
`;

const Projects = () => (
    <Layout>
        <SEO
            title="Projects"
            keywords={[
                `gatsby`,
                `application`,
                `react`,
                `drew`,
                'johnson',
                'portfolio',
                'projects'
            ]}
        />
        <Root>
            <Text>Projects List Coming Soon :)</Text>
            <PugImage
                src={Pug}
                alt="pug"
                onClick={() => window.open(PUG_SEARCH, '_blank')}
            ></PugImage>
        </Root>
    </Layout>
);

export default Projects;
