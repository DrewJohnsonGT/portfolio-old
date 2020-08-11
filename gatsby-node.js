const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        },
    });
};

const POSTS_QUERY = `{
    allMdx(
        filter: { fields: { collection: { eq: "posts"} } },
        limit: 5000
    ) {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    description
                    date
                }
            }
        }
    }
}
`;

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const PostComponent = path.resolve('./src/templates/post.js');

    const postsQueryResult = await graphql(POSTS_QUERY);

    if (postsQueryResult.errors) {
        throw postsQueryResult.errors;
    }

    const posts = postsQueryResult.data.allMdx.edges;
    posts.forEach((note) => {
        const postSlug = note.node.fields.slug;
        const path = postSlug.split('/')[postSlug.split('/').length - 2];
        createPage({
            path: `/posts/${path}/`,
            component: PostComponent,
            context: {
                slug: note.node.fields.slug,
            },
        });
    });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions;
    if (node.internal.type === 'Mdx') {
        const filePath = createFilePath({ node, getNode });
        const parent = getNode(node.parent);
        createNodeField({
            node,
            name: 'slug',
            value: filePath,
        });
        createNodeField({
            node,
            name: 'collection',
            value: parent.sourceInstanceName,
        });
    }
};
