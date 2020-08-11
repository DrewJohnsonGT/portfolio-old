import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';
import { Text } from 'components/index';

const Post = styled.div`
    margin: 0.5rem;
    padding: 1rem;
    border-radius: 2px;
    background-color: ${({ theme }) => theme.offBackground};
    transition: all 0.15s;
    backface-visibility: hidden;
    &:hover {
        transform: scale(1.05);
    }
`;
const Article = styled(Link)`
    color: inherit;
    text-decoration: none;
`;
const Header = styled.div`
    display: flex;
    flex-direction: column;
`;
const Title = styled(Text)``;
const Description = styled(Text)``;
const Date = styled.small`
    font-weight: 100;
    color: ${({ theme }) => theme.colorLowEmphasis};
`;

const PostsPage = ({ data, location }) => {
    const posts = data.allMdx.edges;
    return (
        <>
            {posts.map(({ node }) => {
                const {
                    frontmatter: { title, date, description },
                    fields: { slug },
                } = node;
                return (
                    <Post key={slug}>
                        <Article to={`/posts${slug}`}>
                            <Header>
                                <Title type='subheader1'>{title}</Title>
                                <Date type='subheader2'>{date}</Date>
                            </Header>
                            <Description type='body'>{description}</Description>
                        </Article>
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
