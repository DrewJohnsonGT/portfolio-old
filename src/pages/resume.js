import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { ActionButton, ToggleButton } from 'components/index';
import { COLORS } from 'utils/constants';

const TopBar = styled.div`
    height: 300px;
    background-color: ${COLORS.LIGHT_ORANGE};
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
    background-color: ${COLORS.OFF_WHITE};
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const ResumeDiv = styled.div`
    width: 100%;
    margin-top: -150px;
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
    flex-direction: column;
`;
export const query = graphql`
    query {
        resumeImage: file(relativePath: { regex: "/Resume.png/" }) {
            childImageSharp {
                fluid(maxWidth: 1200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        PDF: file(relativePath: { regex: "/Resume.pdf/" }) {
            publicURL
        }
        Word: file(relativePath: { regex: "/Resume.docx/" }) {
            publicURL
        }
    }
`;

const ResumePage = ({ data }) => {
    const [resumeType, setResumeType] = useState('PDF');
    return (
        <>
            <TopBar>
                <Header>Resume</Header>
                <ButtonDiv>
                    <ToggleButton
                        right={{
                            onClick: () => setResumeType('Word'),
                            selected: resumeType === 'Word',
                            label: 'Word',
                        }}
                        left={{
                            onClick: () => setResumeType('PDF'),
                            selected: resumeType === 'PDF',
                            label: 'PDF',
                        }}
                    />
                    <DownloadButton>
                        <DownloadLink
                            href={data[resumeType].publicURL}
                            download={`DrewJohnson_Resume.${
                                resumeType === 'PDF' ? 'pdf' : 'docx'
                            }`}
                            target='_blank'>
                            Download
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
        </>
    );
};

export default ResumePage;
