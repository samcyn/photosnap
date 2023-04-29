import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import AppPageLayout from "../../components/layout/AppPageLayout";
import AppSeo from "../../components/AppSeo";
import AppCardWithIcon from '../../components/shared/cards/AppCardWithIcon';

const BlogPost = ({ data, children }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <AppPageLayout pageTitle={data.mdx.frontmatter.title}>
      {/* <p>{data.mdx.frontmatter.date}</p> */}
      {/* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      /> */}
      <AppCardWithIcon 
        title="100% Responsive"
        description="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        iconProps={{
          icon: 'drag_n_drop',
          width: '81', 
          height: '72'
          // width="81" height="72"
        }}
      />
      {children}
    </AppPageLayout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Head = ({ data }: any) => <AppSeo title={data.mdx.frontmatter.title} />

export default BlogPost;