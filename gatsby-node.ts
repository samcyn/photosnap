import path from "path";
import type { CreatePagesArgs } from "gatsby";

type Props = {
  allMdx: {
    edges: {
      node: {
        frontmatter: {
          slug: string
        }
      }
    }[]
  }
}

exports.createPages = async ({ graphql, actions, reporter }: CreatePagesArgs) => {
  const { createPage } = actions;

  const result = await graphql<Props>(`
    query StoryQuery {
      allMdx(filter: {frontmatter: {slug: {ne: "home_page"}}}) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return
  }

  if (!result.data) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    return;
  }
  const storyTemplate = path.resolve('src/templates/story.tsx');

  result.data.allMdx.edges.forEach(edge => {
    const slug = edge.node.frontmatter.slug
    createPage({
      path: `/stories/${slug}`,
      component: storyTemplate,
      context: {
        slug,
      },
    })
  })
}