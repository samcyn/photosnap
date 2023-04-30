import * as React from 'react'
import { graphql } from 'gatsby'

import AppPageLayout from "../../components/layout/AppPageLayout";
import AppSeo from "../../components/AppSeo";

const BlogPost = ({ children }: any) => {
  return (
    <AppPageLayout>
      {children}
    </AppPageLayout>
  )
}

// export const query = graphql`
//   query($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         hero_image_alt
//         hero_image_credit_link
//         hero_image_credit_text
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `;

// export const Head = ({ data }: any) => <AppSeo title={data.mdx.frontmatter.title} />

export default BlogPost;