import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { Text, ListContainer, Tag } from 'components/index';
import { MAX_LIST_WIDTH, COLORS } from 'utils/constants';

const PROJECT_SIZES = {
    small: { color: COLORS.GREEN },
    medium: { color: COLORS.YELLOW },
    large: { color: COLORS.ORANGE },
    'very-large': { color: COLORS.RED },
};

const PageTitle = styled(Text)``;
const Project = styled(ListContainer)`
    text-align: center;
    max-width: ${MAX_LIST_WIDTH}px;
`;
const Title = styled(Text)`
    margin: 0;
`;
const Description = styled(Text)``;
const Date = styled(Text)`
    margin: 0.25rem;
    display: inline;
`;
const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 0;
`;
const TechItem = styled(Tag)``;
const Thumbnail = styled(Img)`
    margin: 1.25rem;
    border-radius: 4px;
`;
const Tags = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;
const Size = styled.span`
    font-size: 0.75rem;
    font-weight: lighter;
    text-transform: uppercase;
    margin: 0;
    padding: 0.05rem 0.25rem;
    color: ${({ color }) => color}BB;
    border: 2px solid ${({ color }) => color}BB;
    border-radius: 3px;
`;

const ProjectsPage = ({ data }) => {
    const projects = data.allMdx.edges;
    return (
        <>
            <PageTitle type='pageTitle' showDesktop>
                My Projects
            </PageTitle>
            {projects.map(({ node }) => {
                const {
                    frontmatter: {
                        title,
                        date,
                        shortDescription,
                        tech,
                        thumbnail,
                        size,
                    },
                    fields: { slug },
                } = node;
                return (
                    <Project key={slug} to={`/projects/${slug}`}>
                        <Title type='header'>{title}</Title>
                        <Tags>
                            <Date type='subheader2' emphasis='LOW'>
                                {date}
                            </Date>
                            <Size color={PROJECT_SIZES[size].color}>
                                {size}
                            </Size>
                        </Tags>
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
                        size
                        thumbnail {
                            childImageSharp {
                                fluid(maxWidth: 800, maxHeight: 400) {
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
