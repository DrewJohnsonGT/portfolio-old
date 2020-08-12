import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Text, ListContainer } from 'components/index';

const PageTitle = styled(Text)``;
const Post = styled(ListContainer)``;
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
                    <Post key={slug} to={`/posts${slug}`}>
                        <Header>
                            <Title type='subheader1'>{title}</Title>
                            <Date type='subheader2'>{date}</Date>
                        </Header>
                        <Description type='body'>{description}</Description>
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
