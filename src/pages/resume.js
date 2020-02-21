import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { SEO, Layout, ActionButton } from 'components/index';
import styled from 'styled-components';
import { COLORS } from '../utils/constants';

const TopBar = styled.div`
    height: 300px;
    background-color: ${COLORS.lightOrange};
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 225px;
    }
`;
const Body = styled.div`
    min-height: 50vh;
    background-color: ${COLORS.offWhite};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ResumeDiv = styled.div`
    width: 100%;
    margin-top: -200px;
    max-width: 1200px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
    @media (max-width: 600px) {
        margin-top: 0px;
    }
`;
const Resume = styled(Img)`
    max-width: 100%;
`;
const Header = styled.div`
    font-size: 1.75em;
    font-weight: bold;
    flex: 1;
    color: white;
    margin: 1rem;
    max-height: 25px;
`;
const DownloadButton = styled(ActionButton)``;
const DownloadLink = styled.a`
    text-decoration: none;
    color: inherit;
`;
const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;
// const TypeToggleDiv = styled.div`
//     display: flex;
//     justify-content: center;
//     flex: 1;
// `;
// const ToggleElementBody = styled.div`
//     display: flex;
//     flex-direction: row;
//     border-radius: 8px;
//     margin: 1rem;
//     box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
//         0px 2px 2px 0px rgba(0, 0, 0, 0.14),
//         0px 3px 1px -2px rgba(0, 0, 0, 0.12);
//     max-height: 40px;
// `;
// const ToggleElement = styled(ActionButton)`
//     background-color: ${COLORS.offWhite};
//     padding: 0.25rem;
//     margin: 0;
//     width: 80px;
//     font-size: 1em;
//     color: ${COLORS.darkOrange};
//     cursor: pointer;
//     &:hover {
//         box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.2);
//         transform: none;
//     }
//     ${({ selected }) =>
//         selected
//             ? css`
//                   box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.2);
//                   background-color: ${COLORS.darkOrange};
//                   color: white;
//               `
//             : css`
//                   background-color: white;
//                   &:hover {
//                       color: white;
//                   }
//               `}
//     ${({ side }) => css`
//         border-top-right-radius: ${side === 'right' ? 'inherit' : 0};
//         border-bottom-right-radius: ${side === 'right' ? 'inherit' : 0};
//         border-top-left-radius: ${side === 'right' ? 0 : 'inherit'};
//         border-bottom-left-radius: ${side === 'right' ? 0 : 'inherit'};
//     `}
// `;
export const query = graphql`
    query {
        resumeImage: file(relativePath: { regex: "/Resume.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        resumePDF: file(relativePath: { regex: "/Resume.pdf/" }) {
            publicURL
        }
    }
`;

const ResumePage = ({ data }) => {
    return (
        <Layout>
            <SEO
                title="Resume"
                keywords={[
                    'gatsby',
                    'application',
                    'react',
                    'drew',
                    'johnson',
                    'portfolio',
                    'projects',
                    'Resume'
                ]}
            />
            <TopBar>
                <Header>Resume</Header>
                <ButtonDiv>
                    <DownloadButton>
                        <DownloadLink
                            href={data['resumePDF'].publicURL}
                            download="DrewJohnson_Resume.pdf"
                            target="_blank"
                        >
                            Download PDF Version
                        </DownloadLink>
                    </DownloadButton>
                </ButtonDiv>
            </TopBar>
            <Body>
                <ResumeDiv>
                    <Resume
                        fluid={data.resumeImage.childImageSharp.fluid}
                        alt={'Drew Johnson Resume'}
                    />
                </ResumeDiv>
            </Body>
        </Layout>
    );
};

export default ResumePage;
