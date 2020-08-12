import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Text, ListContainer } from 'components/index';

const PageTitle = styled(Text)``;
const Project = styled(ListContainer)``;
const Header = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled(Text)``;
const Description = styled(Text)``;
const Tech = styled.div``;
const TechItem = styled.span`
    padding: 0.25rem 0.5rem;
    margin: 0.25rem;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colorLowEmphasis};
`;
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
                    frontmatter: { title, description, tech, thumbnail },
                    fields: { slug },
                } = node;
                return (
                    <Project key={slug} to={`/projects${slug}`}>
                        <Header>
                            <Title type='subheader1'>{title}</Title>
                        </Header>
                        <Description type='body'>{description}</Description>
                        <Tech>
                            {tech
                                .split(',')
                                .filter(Boolean)
                                .map((techItem) => (
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
                        description
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
