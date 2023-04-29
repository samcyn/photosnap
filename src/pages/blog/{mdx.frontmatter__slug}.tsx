import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import AppPageLayout from "../../components/layout/AppPageLayout";
import AppSeo from "../../components/AppSeo";
import AppCardWithPhotoAndText from '../../components/shared/cards/AppCardWithPhotoAndText';

const BlogPost = ({ data, children }: any) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <AppPageLayout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      /> */}
      <AppCardWithPhotoAndText
        className="w-full"
        storyTitle="Tunde Badmus"
        storyAuthor="by John Appleseed"
        src={data.mdx.frontmatter.hero_image}
        alt={data.mdx.frontmatter.hero_image_alt}
        publishedDate="2002-12-2"
        
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
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