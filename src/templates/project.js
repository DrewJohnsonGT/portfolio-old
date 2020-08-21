import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Text, Tag, TLDRLink } from 'components/index';
import { MIN_SCREEN_WIDTH, ARTICLE_WIDTH } from 'utils/constants';

const Root = styled.div`
    padding: 0.5rem;
    min-width: ${MIN_SCREEN_WIDTH}px;
    max-width: ${ARTICLE_WIDTH}px;
    margin: 0;
`;
const Content = styled.article`
    margin-bottom: 1rem;
`;
const Title = styled(Text)`
    text-align: center;
    margin: 0;
`;
const Date = styled(Text)`
    text-align: center;
    margin: 0;
`;
const Tech = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
`;
const TechItem = styled(Tag)``;

const ProjectTemplate = ({ data }) => {
    const {
        frontmatter: { title, date, tech },
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
                <TLDRLink />
                <MDXRenderer>{body}</MDXRenderer>
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
            }
        }
    }
`;
