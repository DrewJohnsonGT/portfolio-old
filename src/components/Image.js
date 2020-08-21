import React, { useMemo } from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Root = styled(Img)`
    flex: 1;
    border-radius: 3px;
`;
const Wrapper = styled.div`
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colorLowEmphasis};
`;

const Image = ({ src, dir, alt }) => {
    const data = useStaticQuery(graphql`
        query {
            allFile(filter: { relativePath: { regex: "/images/" } }) {
                edges {
                    node {
                        name
                        relativePath
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
        <Wrapper>
            <Root
                alt={alt ? alt : match.node.name}
                fluid={match.node.childImageSharp.fluid}
            />
        </Wrapper>
    );
};

export default Image;
