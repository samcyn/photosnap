import * as React from 'react';
import { graphql, Link } from 'gatsby';
import type { HeadFC, PageProps } from "gatsby";

import AppPageLayout from "../../components/layout/AppPageLayout";
import AppSeo from "../../components/AppSeo";
// import { AppCardWithPhoto } from '../../components/shared/cards';

type Props =  {
  // allMdx: {
  //   nodes: {
  //     id: string
  //     frontmatter: {
  //       slug: string
  //       title: string
  //       date: string
  //     }
  //     excerpt: string
  //   }[];
  // }
}

const BlogPage: React.FC<PageProps<Props>>  = ({ data }) => {
  return (
    <AppPageLayout>
      {/* {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      } */}
    </AppPageLayout>
  )
}

// export const query = graphql`
//   query {
//     allMdx(sort: { frontmatter: { date: DESC }}) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//           slug
//         }
//         id
//         excerpt
//       }
//     }
//   }
// `;

export const Head: HeadFC = () => <AppSeo title="My Blog Posts" />

export default BlogPage