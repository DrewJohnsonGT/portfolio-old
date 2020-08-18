import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Text } from 'components/index';
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
    margin-bottom: 2rem;
`;

const PostTemplate = ({ data }) => {
    const {
        frontmatter: { title, date },
        body,
    } = data.mdx;
    return (
        <Root>
            <Title type='header'>{title}</Title>
            <Date type='subheader2' emphasis='LOW'>
                {date}
            </Date>
            <Content>
                <MDXRenderer>{body}</MDXRenderer>
            </Content>
        </Root>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        mdx(fields: { slug: { eq: $slug } }) {
            id
            body
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
