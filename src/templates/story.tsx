import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from 'gatsby';
import { IGatsbyImageData } from "gatsby-plugin-image";


import AppPageLayout from "../components/layout/AppPageLayout";
import AppSeo from "../components/AppSeo";
import { AppCardWithPhotoAndText } from "../components/shared/cards";

type ImageSharpProp = {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

type MdxProp = {
  id: string
  frontmatter: {
    slug: string
    title: string
    description: string
    is_featured: boolean
    publishedDate: string
    status: string
    author: string
    desktop_image: ImageSharpProp
  }
  body: string
}

type Props = {
  mdx: MdxProp
}

const StoryPage: React.FC<PageProps<Props>> = ({
  data
}) => {
  const {
    frontmatter, body
  } = data.mdx;
  return (
    <AppPageLayout>
      <section>
        <AppCardWithPhotoAndText
          storyTitle={frontmatter.title}
          storyTagline={frontmatter.is_featured ? "FEATURED STORY" : undefined}
          storyAuthor={`by ${frontmatter.author}`}
          storyDescription={frontmatter.description}
          src={frontmatter.desktop_image}
          publishedDate={frontmatter.publishedDate}
          alt={frontmatter.title}
          mode="hero"
          imageClassName="h-375px"
        />
      </section>
    </AppPageLayout>
  )
}

export const query = graphql`
  query ($slug: String) {
    mdx(frontmatter: {slug: {eq: $slug}}) {
      frontmatter {
        slug
        status
        title
        desktop_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        publishedDate(formatString: "MMMM Do, YYYY")
        is_featured
        author
        description
      }
      id
      body
    }
  }
`;

export default StoryPage;

export const Head: HeadFC<Props> = ({data}) => <AppSeo title={data.mdx.frontmatter.slug} />
