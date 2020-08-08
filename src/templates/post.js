import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Text } from 'components/index';

const Root = styled.div`
    padding: 0.5rem;
    min-width: 375px;
    max-width: 800px;
    margin: 0;
`;
const Content = styled.article``;
const Title = styled(Text)``;
const Date = styled(Text)``;

const PostTemplate = ({ data }) => {
    const {
        frontmatter: { title, date },
        html,
    } = data.markdownRemark;
    return (
        <Root l>
            <Content>
                <Title type='header'>{title}</Title>
                <Date type='subheader2'>{date}</Date>
                <section dangerouslySetInnerHTML={{ __html: html }} />
            </Content>
        </Root>
    );
};

export default PostTemplate;

export const pageQuery = graphql`
    query PostBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;
