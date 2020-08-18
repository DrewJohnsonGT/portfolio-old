import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Text, Image, Tag } from 'components/index';
import { MIN_SCREEN_WIDTH } from 'utils/constants';

const Root = styled.div`
    padding: 0.5rem;
    min-width: ${MIN_SCREEN_WIDTH}px;
    max-width: 800px;
    margin: 0;
`;
const Content = styled.article``;
const Title = styled(Text)`
    margin: 0;
`;
const Date = styled(Text)`
    margin-top: 0;
`;
const Images = styled.div`
    flex: 1;
    margin-top: 2rem;
`;
const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1.5rem 0;
`;
const TechItem = styled(Tag)``;

const ProjectTemplate = ({ data }) => {
    const {
        frontmatter: { title, date, images, tech },
        body,
    } = data.mdx;
    return (
        <Root>
            <Title type='header'>{title}</Title>
            <Date type='subheader2' emphasis='LOW'>
                {date}
            </Date>
            <Content>
                <Tech>
                    {tech.split(',').map((techItem) => (
                        <TechItem key={techItem}>{techItem.trim()}</TechItem>
                    ))}
                </Tech>
                <MDXRenderer>{body}</MDXRenderer>
                <Images>
                    {images.map((image, imageIndex) => (
                        <Image image={image} key={imageIndex} />
                    ))}
                </Images>
            </Content>
        </Root>
    );
};

export default ProjectTemplate;

export const pageQuery = graphql`
    query ProjectsBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            id
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                tech
                images {
                    childImageSharp {
                        fluid(maxWidth: 800) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
