import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Text, ListContainer } from 'components/index';
import { MAX_LIST_WIDTH } from 'utils/constants';

const PageTitle = styled(Text)``;
const Post = styled(ListContainer)`
    max-width: ${MAX_LIST_WIDTH}px;
`;
const Title = styled(Text)`
    margin: 0;
`;
const Description = styled(Text)``;
const Date = styled(Text)`
    margin: 0.25rem;
`;

const PostsPage = ({ data }) => {
    const posts = data.allMdx.edges;
    return (
        <>
            <PageTitle type='pageTitle'>Posts</PageTitle>
            {posts.map(({ node }) => {
                const {
                    frontmatter: { title, date, description },
                    fields: { slug },
                } = node;
                return (
                    <Post key={slug} to={`/posts/${slug}`}>
                        <Title type='header'>{title}</Title>
                        <Date type='subheader2' emphasis='LOW'>
                            {date}
                        </Date>
                        <Description type='primary'>{description}</Description>
                    </Post>
                );
            })}
        </>
    );
};

export default PostsPage;

export const postQuery = graphql`
    query {
        allMdx(
            filter: { fields: { collection: { eq: "posts" } } }
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
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
