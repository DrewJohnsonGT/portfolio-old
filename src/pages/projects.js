import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Text, ListContainer, Tag } from 'components/index';
import { MAX_LIST_WIDTH } from 'utils/constants';

const PageTitle = styled(Text)``;
const Project = styled(ListContainer)`
    max-width: ${MAX_LIST_WIDTH}px;
`;
const Title = styled(Text)`
    margin: 0;
`;
const Description = styled(Text)``;
const Date = styled(Text)`
    margin: 0.25rem;
`;
const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
`;
const TechItem = styled(Tag)``;
const Thumbnail = styled(Img)`
    margin: 1.25rem;
    border-radius: 4px;
`;

const ProjectsPage = ({ data }) => {
    const projects = data.allMdx.edges;
    return (
        <>
            <PageTitle type='pageTitle'>Projects</PageTitle>
            {projects.map(({ node }) => {
                const {
                    frontmatter: {
                        title,
                        date,
                        shortDescription,
                        tech,
                        thumbnail,
                    },
                    fields: { slug },
                } = node;
                return (
                    <Project key={slug} to={`/projects/${slug}`}>
                        <Title type='header'>{title}</Title>
                        <Date type='subheader2' emphasis='LOW'>
                            {date}
                        </Date>
                        <Description type='primary'>
                            {shortDescription}
                        </Description>
                        <Tech>
                            {tech.split(',').map((techItem) => (
                                <TechItem key={techItem}>
                                    {techItem.trim()}
                                </TechItem>
                            ))}
                        </Tech>
                        <Thumbnail
                            fluid={thumbnail.childImageSharp.fluid}
                            alt={title}
                        />
                    </Project>
                );
            })}
        </>
    );
};

export default ProjectsPage;

export const projectsQuery = graphql`
    query {
        allMdx(
            filter: { fields: { collection: { eq: "projects" } } }
            sort: { fields: [frontmatter___date], order: DESC }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        shortDescription
                        tech
                        date(formatString: "MMMM DD, YYYY")
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
