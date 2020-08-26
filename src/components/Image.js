import React, { useMemo } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';
import { MIN_SCREEN_WIDTH } from 'utils/constants';

const ImageRoot = styled(Img)`
    flex: 1;
    border-radius: 3px;
`;
const Center = styled.div`
    display: flex;
    justify-content: center;
`;
const GifRoot = styled.img`
    flex: 1;
    border-radius: 3px;
    max-width: ${MIN_SCREEN_WIDTH}px;
    max-height: 600px;
`;
const Wrapper = styled.div`
    display: inline-flex;
    justify-self: center;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colorLowEmphasis};
`;

const Image = ({ src, dir, alt, gif }) => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/images/" } }) {
                edges {
                    node {
                        name
                        relativePath
                        publicURL
                        childImageSharp {
                            fluid(maxWidth: 600) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `);

    const match = useMemo(
        () =>
            data.allFile.edges.find(
                ({ node }) => node.relativePath === `${dir}/images/${src}`
            ),
        [data, src, dir]
    );
    if (!match) {
        return null;
    }
    return (
        <Center>
            <Wrapper>
                {gif ? (
                    <GifRoot
                        alt={alt ? alt : match.node.name}
                        src={match.node.publicURL}
                    />
                ) : (
                    <ImageRoot
                        alt={alt ? alt : match.node.name}
                        fluid={match.node.childImageSharp.fluid}
                    />
                )}
            </Wrapper>
        </Center>
    );
};

export default Image;
