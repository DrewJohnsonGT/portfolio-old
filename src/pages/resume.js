import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { ActionButton, ToggleButton, Text } from 'components/index';
import { FaDownload } from 'react-icons/fa';

const PageTitle = styled(Text)``;
const ResumeDiv = styled.div`
    width: calc(100% - 2rem);
    padding: 1rem;
    margin: 1rem;
    max-width: 1200px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14),
        0px 3px 1px -2px rgba(0, 0, 0, 0.12);
`;
const Resume = styled(Img)`
    flex: 1;
    max-width: 100%;
`;
const DownloadButton = styled(ActionButton)``;
const DownloadIcon = styled(FaDownload)`
    color: white;
    width: 1.5rem;
    height: 1.5rem;
    margin: 0.25rem;
`;
const DownloadLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: inherit;
`;
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
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
            <PageTitle type='pageTitle'>Resume</PageTitle>
            <ButtonDiv>
                <DownloadButton>
                    <DownloadLink
                        href={data[resumeType].publicURL}
                        download={`DrewJohnson_Resume.${
                            resumeType === 'PDF' ? 'pdf' : 'docx'
                        }`}
                        target='_blank'>
                        Download
                        <DownloadIcon />
                    </DownloadLink>
                </DownloadButton>
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
            </ButtonDiv>
            <ResumeDiv>
                <Resume
                    fluid={data.resumeImage.childImageSharp.fluid}
                    alt={'Drew Johnson Resume'}
                />
            </ResumeDiv>
        </>
    );
};

export default ResumePage;
