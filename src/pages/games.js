import React from 'react';
import styled from 'styled-components';
// import { Link, graphql } from 'gatsby';
import { Text } from 'components/index';

const PageTitle = styled(Text)``;
const ComingSoon = styled(Text)``;
// const Game = styled.div`
//     margin: 0.5rem;
//     padding: 1rem;
//     border-radius: 2px;
//     background-color: ${({ theme }) => theme.offBackground};
//     transition: all 0.15s;
//     backface-visibility: hidden;
//     &:hover {
//         transform: scale(1.05);
//     }
// `;
// const GameLink = styled(Link)`
//     color: inherit;
//     text-decoration: none;
// `;
// const Header = styled.div`
//     display: flex;
//     flex-direction: column;
// `;
// const Title = styled(Text)``;
// const Description = styled(Text)``;

const GamesPage = ({ data }) => {
    // const games = data.allMdx.edges;
    return (
        <>
            <PageTitle type='pageTitle'>Games</PageTitle>
            <ComingSoon type='subheader1'>Coming Soon :)</ComingSoon>
            {/* {games.map(({ node }) => {
                const {
                    frontmatter: { title, date, description },
                    fields: { slug },
                } = node;
                return (
                    <Game key={slug}>
                        <GameLink to={`/games${slug}`}>
                            <Header>
                                <Title type='subheader1'>{title}</Title>
                            </Header>
                            <Description type='primary'>{description}</Description>
                        </GameLink>
                    </Game>
                );
            })} */}
        </>
    );
};

export default GamesPage;

// export const pageQuery = graphql`
//     query {
//         allMdx(
//             filter: { fields: { collection: { eq: "games" } } }
//             sort: { fields: [frontmatter___date], order: DESC }
//         ) {
//             edges {
//                 node {
//                     fields {
//                         slug
//                     }
//                     frontmatter {
//                         title
//                         description
//                         date(formatString: "MMMM DD, YYYY")
//                     }
//                 }
//             }
//         }
//     }
// `;
